import React from 'react';

const AddBeneficiaryForm = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Beneficiary to Other Banks</h2>

      <form>
        <div className="mb-4">
          <label htmlFor="bank" className="block font-medium text-gray-700 mb-2">
            Select Bank *
          </label>
          <select
            id="bank"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
          >
            <option>Select One</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="shortName" className="block font-medium text-gray-700 mb-2">
            Short Name *
          </label>
          <input
            type="text"
            id="shortName"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBeneficiaryForm;