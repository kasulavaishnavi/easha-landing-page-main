import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">Contact Us</h1>

      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="font-semibold text-lg">Merchant Legal Entity Name:</h3>
          <p>N Pruthviraj</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Registered Address:</h3>
          <p>
            Plot No-78, 7-1-212/A/63, Shivbagh Colony, Ameerpet,<br />
            Prakashamnagar, Hyderabad, Secunderabad,<br />
            Telangana, India - 500016
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Operational Address:</h3>
          <p>
            Plot No-78, 7-1-212/A/63, Shivbagh Colony, Ameerpet,<br />
            Prakashamnagar, Hyderabad, Secunderabad,<br />
            Telangana, India - 500016
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Telephone:</h3>
          <p>
            <a href="tel:6301680400" className="text-teal-600 hover:underline">
              6301680400
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Email:</h3>
          <p>
            <a href="mailto:contact@eashaop.com" className="text-teal-600 hover:underline">
              contact@eashaop.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
