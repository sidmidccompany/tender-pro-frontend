import React, { useState } from "react";
import "./CSS/AllCss";

const TenderDetails = ({ tenders, onTenderCreated }) => {
// Sample tender data with added fields for demonstration
const [formData, setFormData] = useState({
    tenderRef: "TDR-2025-001",
    title: "Tender for IT Services",
    department: "Ministry of IT",
    category: "Services",
    value: "500000",
    deadline: "2025-12-31T23:59",
    description: "This is a tender for IT Services for government departments.",
    bidNumber: "BID-2025-01",
    bidEndDate: "2025-12-31",
    bidOpeningDate: "2025-12-15",
    bidOfferValidity: "2026-01-31",
    ministryStateName: "",
    departmentName: "",
    organizationName: "",
    officeName: "",
    totalQuantity: "",
    itemCategory: "",
    minAnnualTurnover: "",
    yearsOfExperienceRequired: "",
    mseExemption: "",
    startupExemption: "",
    experienceCriteria: "",
    oemTurnoverCriteria: "",
    typeOfBid: "",
    pastPerformancePercentage: "",
    raQualificationRule: "",
    emdDetails: "",
    advisoryBank: "",
    emdAmount: "",
    emdExemption: "",
    epbgPercentage: "",
    durationEpbg: "",
    deliveryDays: "",
    consigneeOfficer: "",
    address: "",
    msePurchasePreference: "",
    miiPurchasePreference: "",
    sampleClause: "",
    warranty: "",
    serviceSupport: "",
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = () => {
    // Form validation
    if (
     !formData.tenderRef ||
     !formData.title ||
     !formData.department ||
     !formData.category ||
     !formData.value ||
     !formData.deadline
    ) {
     alert("Please fill in all required fields");
     return;
    }

    const newTender = {
     id: Date.now(),
     ...formData,
     status: "Active",
     createdAt: new Date().toISOString(),
    };
    onTenderCreated(newTender);

    // Reset form
    setFormData({
     tenderRef: "",
     title: "",
     department: "",
     category: "",
     value: "",
     deadline: "",
     description: "",
     bidNumber: "",
     bidEndDate: "",
     bidOpeningDate: "",
     bidOfferValidity: "",
     ministryStateName: "",
     departmentName: "",
     organizationName: "",
     officeName: "",
     totalQuantity: "",
     itemCategory: "",
     minAnnualTurnover: "",
     yearsOfExperienceRequired: "",
     mseExemption: "",
     startupExemption: "",
     experienceCriteria: "",
     oemTurnoverCriteria: "",
     typeOfBid: "",
     pastPerformancePercentage: "",
     raQualificationRule: "",
     emdDetails: "",
     advisoryBank: "",
     emdAmount: "",
     emdExemption: "",
     epbgPercentage: "",
     durationEpbg: "",
     deliveryDays: "",
     consigneeOfficer: "",
     address: "",
     msePurchasePreference: "",
     miiPurchasePreference: "",
     sampleClause: "",
     warranty: "",
     serviceSupport: "",
    });

    alert("Tender created successfully!");
};

return (
    <div id="tenders-page" className="page-content">
     <h1>Tender Management Details</h1>

     <div className="form-section">
        <h2>Basic Tender Information</h2>
        <div className="form-grid">
         <div className="form-group">
            <label className="form-label">Tender Reference Number*</label>
            <input
             type="text"
             className="form-input"
             name="tenderRef"
             value={formData.tenderRef}
             onChange={handleInputChange}
             placeholder="Enter tender reference"
             required
            />
         </div>
         <div className="form-group">
            <label className="form-label">Tender Title*</label>
            <input
             type="text"
             className="form-input"
             name="title"
             value={formData.title}
             onChange={handleInputChange}
             placeholder="Enter tender title"
             required
            />
         </div>
         <div className="form-group">
            <label className="form-label">Department*</label>
            <select
             className="form-select"
             name="department"
             value={formData.department}
             onChange={handleInputChange}
             required
            >
             <option value="">Select Department</option>
             <option value="finance">Ministry of Finance</option>
             <option value="it">Ministry of IT</option>
             <option value="railways">Railways</option>
             <option value="defense">Defense</option>
             <option value="energy">Energy Ministry</option>
            </select>
         </div>
         <div className="form-group">
            <label className="form-label">Tender Category*</label>
            <select
             className="form-select"
             name="category"
             value={formData.category}
             onChange={handleInputChange}
             required
            >
             <option value="">Select Category</option>
             <option value="works">Works</option>
             <option value="goods">Goods</option>
             <option value="services">Services</option>
             <option value="consultancy">Consultancy</option>
            </select>
         </div>
         <div className="form-group">
            <label className="form-label">Estimated Value (₹)*</label>
            <input
             type="number"
             className="form-input"
             name="value"
             value={formData.value}
             onChange={handleInputChange}
             placeholder="Enter estimated value"
             required
             min="0"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Submission Deadline*</label>
            <input
             type="datetime-local"
             className="form-input"
             name="deadline"
             value={formData.deadline}
             onChange={handleInputChange}
             required
            />
         </div>
         
         <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
             className="form-input"
             name="description"
             value={formData.description}
             onChange={handleInputChange}
             placeholder="Enter tender description"
             rows="4"
            />
         </div>
        </div>

        <h2>Bid Information</h2>
        <div className="form-grid">
         <div className="form-group">
            <label className="form-label">Bid Number</label>
            <input
             type="text"
             className="form-input"
             name="bidNumber"
             value={formData.bidNumber}
             onChange={handleInputChange}
             placeholder="Enter Bid Number"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Bid End Date</label>
            <input
             type="date"
             className="form-input"
             name="bidEndDate"
             value={formData.bidEndDate}
             onChange={handleInputChange}
            />
         </div>
         <div className="form-group">
            <label className="form-label">Bid Opening Date</label>
            <input
             type="date"
             className="form-input"
             name="bidOpeningDate"
             value={formData.bidOpeningDate}
             onChange={handleInputChange}
            />
         </div>
         <div className="form-group">
            <label className="form-label">Bid Offer Validity</label>
            <input
             type="date"
             className="form-input"
             name="bidOfferValidity"
             value={formData.bidOfferValidity}
             onChange={handleInputChange}
            />
         </div>
         <div className="form-group">
            <label className="form-label">Type of Bid</label>
            <select
             className="form-select"
             name="typeOfBid"
             value={formData.typeOfBid}
             onChange={handleInputChange}
            >
             <option value="">Select Bid Type</option>
             <option value="single">Single Bid</option>
             <option value="two-part">Two-Part Bid</option>
             <option value="three-part">Three-Part Bid</option>
             <option value="limited">Limited Tender</option>
            </select>
         </div>
        </div>

        <h2>Organization Details</h2>
        <div className="form-grid">
         <div className="form-group">
            <label className="form-label">Ministry/State Name</label>
            <input
             type="text"
             className="form-input"
             name="ministryStateName"
             value={formData.ministryStateName}
             onChange={handleInputChange}
             placeholder="Enter Ministry/State Name"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Department Name</label>
            <input
             type="text"
             className="form-input"
             name="departmentName"
             value={formData.departmentName}
             onChange={handleInputChange}
             placeholder="Enter Department Name"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Organization Name</label>
            <input
             type="text"
             className="form-input"
             name="organizationName"
             value={formData.organizationName}
             onChange={handleInputChange}
             placeholder="Enter Organization Name"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Office Name</label>
            <input
             type="text"
             className="form-input"
             name="officeName"
             value={formData.officeName}
             onChange={handleInputChange}
             placeholder="Enter Office Name"
            />
         </div>
        </div>

        <h2>Item Details</h2>
        <div className="form-grid">
         <div className="form-group">
            <label className="form-label">Total Quantity</label>
            <input
             type="number"
             className="form-input"
             name="totalQuantity"
             value={formData.totalQuantity}
             onChange={handleInputChange}
             placeholder="Enter Total Quantity"
             min="0"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Item Category</label>
            <input
             type="text"
             className="form-input"
             name="itemCategory"
             value={formData.itemCategory}
             onChange={handleInputChange}
             placeholder="Enter Item Category"
            />
         </div>
        </div>

        <h2>Qualification Criteria</h2>
        <div className="form-grid">
         <div className="form-group">
            <label className="form-label">Minimum Annual Turnover</label>
            <input
             type="number"
             className="form-input"
             name="minAnnualTurnover"
             value={formData.minAnnualTurnover}
             onChange={handleInputChange}
             placeholder="Enter Minimum Annual Turnover"
             min="0"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Years of Experience Required</label>
            <input
             type="number"
             className="form-input"
             name="yearsOfExperienceRequired"
             value={formData.yearsOfExperienceRequired}
             onChange={handleInputChange}
             placeholder="Enter Years of Experience Required"
             min="0"
            />
         </div>
         <div className="form-group">
            <label className="form-label">MSE Exemption</label>
            <select
             className="form-select"
             name="mseExemption"
             value={formData.mseExemption}
             onChange={handleInputChange}
            >
             <option value="">Select Option</option>
             <option value="yes">Yes</option>
             <option value="no">No</option>
            </select>
         </div>
         <div className="form-group">
            <label className="form-label">Startup Exemption</label>
            <select
             className="form-select"
             name="startupExemption"
             value={formData.startupExemption}
             onChange={handleInputChange}
            >
             <option value="">Select Option</option>
             <option value="yes">Yes</option>
             <option value="no">No</option>
            </select>
         </div>
         <div className="form-group">
            <label className="form-label">Experience Criteria</label>
            <textarea
             className="form-input"
             name="experienceCriteria"
             value={formData.experienceCriteria}
             onChange={handleInputChange}
             placeholder="Enter Experience Criteria"
             rows="3"
            />
         </div>
         <div className="form-group">
            <label className="form-label">OEM Turnover Criteria</label>
            <input
             type="text"
             className="form-input"
             name="oemTurnoverCriteria"
             value={formData.oemTurnoverCriteria}
             onChange={handleInputChange}
             placeholder="Enter OEM Turnover Criteria"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Past Performance Percentage</label>
            <input
             type="number"
             className="form-input"
             name="pastPerformancePercentage"
             value={formData.pastPerformancePercentage}
             onChange={handleInputChange}
             placeholder="Enter Past Performance Percentage"
             min="0"
             max="100"
            />
         </div>
         <div className="form-group">
            <label className="form-label">RA Qualification Rule</label>
            <input
             type="text"
             className="form-input"
             name="raQualificationRule"
             value={formData.raQualificationRule}
             onChange={handleInputChange}
             placeholder="Enter RA Qualification Rule"
            />
         </div>
        </div>

        <h2>EMD Details</h2>
        <div className="form-grid">
         <div className="form-group">
            <label className="form-label">EMD Details</label>
            <textarea
             className="form-input"
             name="emdDetails"
             value={formData.emdDetails}
             onChange={handleInputChange}
             placeholder="Enter EMD Details"
             rows="3"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Advisory Bank</label>
            <input
             type="text"
             className="form-input"
             name="advisoryBank"
             value={formData.advisoryBank}
             onChange={handleInputChange}
             placeholder="Enter Advisory Bank"
            />
         </div>
         <div className="form-group">
            <label className="form-label">EMD Amount</label>
            <input
             type="number"
             className="form-input"
             name="emdAmount"
             value={formData.emdAmount}
             onChange={handleInputChange}
             placeholder="Enter EMD Amount"
             min="0"
            />
         </div>
         <div className="form-group">
            <label className="form-label">EMD Exemption</label>
            <select
             className="form-select"
             name="emdExemption"
             value={formData.emdExemption}
             onChange={handleInputChange}
            >
             <option value="">Select Option</option>
             <option value="yes">Yes</option>
             <option value="no">No</option>
            </select>
         </div>
         <div className="form-group">
            <label className="form-label">EPBG Percentage</label>
            <input
             type="number"
             className="form-input"
             name="epbgPercentage"
             value={formData.epbgPercentage}
             onChange={handleInputChange}
             placeholder="Enter EPBG Percentage"
             min="0"
             max="100"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Duration of EPBG</label>
            <input
             type="text"
             className="form-input"
             name="durationEpbg"
             value={formData.durationEpbg}
             onChange={handleInputChange}
             placeholder="Enter Duration of EPBG"
            />
         </div>
        </div>

        <h2>Delivery Details</h2>
        <div className="form-grid">
         <div className="form-group">
            <label className="form-label">Delivery Days</label>
            <input
             type="number"
             className="form-input"
             name="deliveryDays"
             value={formData.deliveryDays}
             onChange={handleInputChange}
             placeholder="Enter Delivery Days"
             min="0"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Consignee Officer</label>
            <input
             type="text"
             className="form-input"
             name="consigneeOfficer"
             value={formData.consigneeOfficer}
             onChange={handleInputChange}
             placeholder="Enter Consignee Officer"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Address</label>
            <textarea
             className="form-input"
             name="address"
             value={formData.address}
             onChange={handleInputChange}
             placeholder="Enter Address"
             rows="3"
            />
         </div>
        </div>

        <h2>Preferences & Clauses</h2>
        <div className="form-grid">
         <div className="form-group">
            <label className="form-label">MSE Purchase Preference</label>
            <select
             className="form-select"
             name="msePurchasePreference"
             value={formData.msePurchasePreference}
             onChange={handleInputChange}
            >
             <option value="">Select Option</option>
             <option value="yes">Yes</option>
             <option value="no">No</option>
            </select>
         </div>
         <div className="form-group">
            <label className="form-label">MII Purchase Preference</label>
            <select
             className="form-select"
             name="miiPurchasePreference"
             value={formData.miiPurchasePreference}
             onChange={handleInputChange}
            >
             <option value="">Select Option</option>
             <option value="yes">Yes</option>
             <option value="no">No</option>
            </select>
         </div>
         <div className="form-group">
            <label className="form-label">Sample Clause</label>
            <textarea
             className="form-input"
             name="sampleClause"
             value={formData.sampleClause}
             onChange={handleInputChange}
             placeholder="Enter Sample Clause"
             rows="3"
            />
         </div>
        </div>

        <h2>Support & Warranty</h2>
        <div className="form-grid">
         <div className="form-group">
            <label className="form-label">Warranty</label>
            <textarea
             className="form-input"
             name="warranty"
             value={formData.warranty}
             onChange={handleInputChange}
             placeholder="Enter Warranty Details"
             rows="3"
            />
         </div>
         <div className="form-group">
            <label className="form-label">Service Support</label>
            <textarea
             className="form-input"
             name="serviceSupport"
             value={formData.serviceSupport}
             onChange={handleInputChange}
             placeholder="Enter Service Support Details"
             rows="3"
            />
         </div>
        </div>
        
        <div className="form-actions">
         <button onClick={handleSubmit} className="btn btn-primary">
            Create Tender
         </button>
         <button className="btn btn-secondary">Cancel</button>
        </div>
     </div>
    </div>
);
};

export default TenderDetails;