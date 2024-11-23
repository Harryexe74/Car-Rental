import React, { useState } from "react";
import {
  FiDollarSign,
  FiCalendar,
  FiCreditCard,
  FiUser,
  FiActivity,
} from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Vendor/AddVendorForm.css";
import FormSection from "../Vendor/FormInput/FormSection";
import FormInput from "../Vendor/FormInput/FormInput";

const AddTransactionForm = () => {
  const [formData, setFormData] = useState({
    customerId: "",
    rentalCharges: "",
    additionalCharges: "",
    paymentMethod: "Credit Card", // default payment method
    paymentDate: "",
    allocationId: "",
    status: "Paid", // default status
    vendorId: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const form = new FormData();
      form.append("customerId", formData.customerId);
      form.append("rentalCharges", formData.rentalCharges);
      form.append("additionalCharges", formData.additionalCharges);
      form.append("paymentMethod", formData.paymentMethod);
      form.append("paymentDate", formData.paymentDate);
      form.append("allocationId", formData.allocationId);
      form.append("status", formData.status);
      form.append("vendorId", formData.vendorId);

      // Debug form data
      for (let pair of form.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      // Simulate successful form submission
      toast.success("Transaction added successfully!");
      setFormData({
        customerId: "",
        rentalCharges: "",
        additionalCharges: "",
        paymentMethod: "Credit Card",
        paymentDate: "",
        allocationId: "",
        status: "Paid",
        vendorId: "",
      });
      event.target.reset(); // Reset form fields
    } catch (error) {
      console.error("Error adding transaction:", error);
      toast.error("Failed to add transaction!");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-ground rounded-[10px] text-primary-900">
      <div className="p-4">
        <div className="flex items-center h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <FiDollarSign className="text-2xl " />
          <h1 className="text-[1.5rem] font-semibold">
            Add Transactions
          </h1>
        </div>
      </div>
      <div className="">
        <form
          className="bg-ground py-2 rounded-b-[10px]"
          onSubmit={handleSubmit}
          id="add-transaction-form"
        >
          <FormSection
            icon={<FiUser className="mb-1" />}
            title="Customer Information"
          >
            <div className="row align-items-center p-4">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <FormInput
                  label="Customer ID"
                  name="customerId"
                  type="number"
                  placeholder="Enter Customer ID"
                  value={formData.customerId}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-6 mb-4 mb-lg-0">
                <FormInput
                  label="Vendor ID"
                  name="vendorId"
                  type="number"
                  placeholder="Enter Vendor ID"
                  value={formData.vendorId}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </FormSection>

          <FormSection
            icon={<FiActivity className="mb-1" />}
            title="Transaction Charges"
          >
            <div className="row p-4">
              <div className="col-lg-6">
                <FormInput
                  label="Rental Charges"
                  name="rentalCharges"
                  type="number"
                  placeholder="Enter Rental Charges"
                  value={formData.rentalCharges}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-6">
                <FormInput
                  label="Additional Charges"
                  name="additionalCharges"
                  type="number"
                  placeholder="Enter Additional Charges"
                  value={formData.additionalCharges}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </FormSection>

          <FormSection
            icon={<FiCreditCard className="mb-1" />}
            title="Payment Information"
          >
            <div className="row p-4">
              <div className="col-lg-4">
                <FormInput
                  label="Payment Method"
                  name="paymentMethod"
                  type="text"
                  placeholder="Enter Payment Method"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-4">
                <FormInput
                  label="Card Holder Name"
                  name="paymentMethod"
                  type="text"
                  placeholder="Enter Holder Name"
                  value={formData.HolderName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-4">
                <FormInput
                  label="Card Number"
                  name="paymentMethod"
                  type="text"
                  placeholder="Enter Card Number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-4">
                <FormInput
                  label="Cvv"
                  name="paymentMethod"
                  type="text"
                  placeholder="Enter CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-4">
                <FormInput
                  label="Payment Date"
                  name="paymentDate"
                  type="date"
                  placeholder="Select Payment Date"
                  value={formData.paymentDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-4">
                <FormInput
                  label="Allocation ID"
                  name="allocationId"
                  type="number"
                  placeholder="Enter Allocation ID"
                  value={formData.allocationId}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </FormSection>

          <FormSection
            icon={<FiActivity className="mb-1" />}
            title="Transaction Status"
          >
            <div className="row p-4">
              <div className="col-lg-6">
                <FormInput
                  label="Status"
                  name="status"
                  type="text"
                  placeholder="Enter Status (Paid/Pending)"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </FormSection>

          {/* <div className="form-group col-lg-12 text-right">
            <button
              type="submit"
              className="mt-3 px-6 py-3 text-white bg-green-600 hover:bg-green-500 rounded-md transition-all"
            >
              Add Transaction
            </button>
          </div> */}
          <div className="flex justify-center p-4">
            <button
              type="submit"
              className="bg-primary-900 text-white py-2 px-4 rounded hover:bg-primary-600"
            >
              Add Transaction
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AddTransactionForm;
