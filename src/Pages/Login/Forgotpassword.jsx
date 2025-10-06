import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Eashalogo from "../../assets/Eashalogo.png";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const Forgotpassword = () => {
  const navigate = useNavigate();

  // Validation schema for phone or email in one field
  const validationSchema = Yup.object({
    identifier: Yup.string()
      .required("Phone number or email is required")
      .test("is-valid", "Enter a valid phone number or email", function (value) {
        if (!value) return false;

        // Check if it's a valid 10-digit phone number
        const phoneRegex = /^\+91\d{10}$/;
        if (phoneRegex.test(value)) return true;

        // Check if it's a valid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value)) return true;

        return false;
      }),
  });

  return (
    <div className="position-relative min-vh-100 d-flex justify-content-center align-items-center bg-white px-3">
      <style>{`
        .logo-img {
          height: 4.563rem;
          width: 5.56rem;
        }

        .logo-wrapper {
          position: absolute;
          top: 2.313rem;
          left: 6.563rem;
        }

        @media (max-width: 991.98px) {
          .logo-wrapper {
            position: relative !important;
            top: unset;
            left: unset;
            margin-bottom: 8px;
            display: flex;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>

      <div className="text-center w-100" style={{ maxWidth: "420px" }}>
        <div className="logo-wrapper">
          <img src={Eashalogo} alt="eAsha Logo" className="logo-img" />
        </div>

        <h2
          className="fw-semibold mt-4 mb-3"
          style={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 2.5rem)" }}
        >
          Forgot Password
        </h2>

        <p
          className="mb-4"
          style={{
            color: "#706e6ed6",
            maxWidth: "400px",
            margin: "0 auto",
            fontSize: "clamp(1rem, 1.2vw + 0.5rem, 1rem)",
          }}
        >
          Don’t worry, resetting your password is easy. Just type in the phone
          number or email you registered to eAsha.
        </p>

        <Formik
          initialValues={{ identifier: "" }}
          validationSchema={validationSchema}
onSubmit={async (values, { setSubmitting }) => {
  try {
    const verifyBy = values.identifier.includes("@") ? "email" : "mobile";

    // Prepare payload dynamically based on type
    const payload =
      verifyBy === "email"
        ? { verifyBy, email: values.identifier }
        : { verifyBy, mobile: values.identifier };

    const res = await fetch(
      `${API_BASE_URL}/api/doctors/forgot-password/request-otp`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Failed to send OTP");

    console.log("OTP request response:", data);

    // Navigate to OTP page
    navigate("/forgot-otp", {
  state: {
    from: "forgot-password",
    identifier: values.identifier,
    doctorId: data.doctorId || null,
  },
});

  } catch (error) {
    alert(error.message);
  } finally {
    setSubmitting(false);
  }
}}

        >
          {({ setFieldValue }) => (
            <Form autoComplete="off">
              <div
                className="text-start mb-3 mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <label
                  htmlFor="identifier"
                  className="form-label"
                  style={{
                    color: "#494949",
                    fontSize: "clamp(1rem, 1.2vw + 0.5rem, 1.125rem)",
                  }}
                >
                  Phone Number / Email
                </label>
                <Field name="identifier">
                  {({ field }) => (
                    <input
                      type="text"
                      placeholder="Enter phone number or email"
                      className="form-control"
                      style={{
                        borderRadius: "28px",
                        fontSize: "1rem",
                        padding: "0.75rem 1rem",
                      }}
                      value={field.value}
                      onChange={(e) => {
                        let input = e.target.value.trim();

                        // If only numbers are typed, auto-add +91
                        const digitsOnly = input.replace(/\D/g, "");
                        if (digitsOnly.length === 10 && /^\d+$/.test(input)) {
                          input = "+91" + digitsOnly;
                        }

                        setFieldValue("identifier", input);
                      }}
                    />
                  )}
                </Field>

                <div style={{ minHeight: "20px", marginTop: "5px" }}>
                  <ErrorMessage name="identifier">
                    {(msg) =>
                      msg ? (
                        <div
                          className="text-danger small"
                          style={{ lineHeight: "1.2" }}
                        >
                          {msg}
                        </div>
                      ) : null
                    }
                  </ErrorMessage>
                </div>
              </div>

              <button
                type="submit"
                className="btn text-white w-100 mt-0"
                style={{
                  maxWidth: "400px",
                  background: "#00A99D",
                  fontSize: "clamp(1rem, 1.2vw + 0.5rem, 1.125rem)",
                  borderRadius: "28px",
                }}
              >
                Verify OTP
              </button>
            </Form>
          )}
        </Formik>

        <p
          className="fw-medium mt-2"
          style={{
            color: "#494949",
            fontSize: "clamp(0.7rem, 1.2vw + 0.5rem, 1rem)",
          }}
        >
          Already have an account?{" "}
          <a href="/login" style={{ color: "#00A99D" }}>
            Log in!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Forgotpassword;
