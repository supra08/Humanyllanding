import React, { useState } from "react";
import { Navigation } from "./Navigation";

export default function RequestAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "75cb99a6-e8e3-4b91-b3aa-4b2e00bf9546");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Check for success in the response (could be at top level or in data object)
      if (data.success === true || data.data?.success === true) {
        setIsSuccess(true);
      } else {
        setError("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #ffffff, #fafafa)' }}>
      <Navigation client:load />
      <section className="pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-[700px] mx-auto">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center" style={{ minHeight: '60vh' }}>
              <div className="mb-10">
                <div className="mx-auto flex items-center justify-center rounded-full" style={{ width: '96px', height: '96px', background: 'linear-gradient(to bottom right, #dcfce7, #f0fdf4)', boxShadow: '0 10px 15px -3px rgba(34, 197, 94, 0.1)' }}>
                  <svg
                    className="text-green-600"
                    style={{ width: '48px', height: '48px' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h1
                className="text-[#0F1113] mb-6 font-normal"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
              >
                Thank You!
              </h1>
              <p
                className="text-[#6b7280] max-w-xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 'clamp(1.125rem, 2vw, 1.25rem)' }}
              >
                Thank you for submitting the form. We will contact you shortly for access.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h1
                  className="text-[#0F1113] mb-4 font-normal"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  Request Access
                </h1>
                <p
                  className="text-[#6b7280] max-w-2xl mx-auto"
                  style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                >
                  Tell us about yourself and how you plan to use Humanyl web agents.
                </p>
              </div>

              <div 
                className="p-8 md:p-12"
                style={{ 
                  borderColor: '#e5e5e5',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)'
                }}
              >
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    <label
                      htmlFor="name"
                      className="block text-[#0F1113] text-sm font-medium"
                      style={{ fontFamily: "'Instrument Sans', sans-serif", letterSpacing: '-0.025em' }}
                    >
                      Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 outline-none transition-all duration-200 text-base"
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        paddingTop: '0.875rem',
                        paddingBottom: '0.875rem',
                        borderWidth: '2px',
                        borderColor: error ? '#fca5a5' : '#e5e7eb',
                        borderRadius: '0.75rem',
                        backgroundColor: '#ffffff',
                        color: '#0F1113',
                      }}
                      onFocus={(e) => {
                        if (!error) {
                          e.target.style.borderColor = '#2CACE8';
                          e.target.style.boxShadow = '0 0 0 4px rgba(44, 172, 232, 0.1)';
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = error ? '#fca5a5' : '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    <label
                      htmlFor="email"
                      className="block text-[#0F1113] text-sm font-medium"
                      style={{ fontFamily: "'Instrument Sans', sans-serif", letterSpacing: '-0.025em' }}
                    >
                      Email <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 outline-none transition-all duration-200 text-base"
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        paddingTop: '0.875rem',
                        paddingBottom: '0.875rem',
                        borderWidth: '2px',
                        borderColor: error ? '#fca5a5' : '#e5e7eb',
                        borderRadius: '0.75rem',
                        backgroundColor: '#ffffff',
                        color: '#0F1113',
                      }}
                      onFocus={(e) => {
                        if (!error) {
                          e.target.style.borderColor = '#2CACE8';
                          e.target.style.boxShadow = '0 0 0 4px rgba(44, 172, 232, 0.1)';
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = error ? '#fca5a5' : '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    <label
                      htmlFor="profession"
                      className="block text-[#0F1113] text-sm font-medium"
                      style={{ fontFamily: "'Instrument Sans', sans-serif", letterSpacing: '-0.025em' }}
                    >
                      Current Profession <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="profession"
                      name="profession"
                      type="text"
                      required
                      className="w-full px-4 outline-none transition-all duration-200 text-base"
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        paddingTop: '0.875rem',
                        paddingBottom: '0.875rem',
                        borderWidth: '2px',
                        borderColor: error ? '#fca5a5' : '#e5e7eb',
                        borderRadius: '0.75rem',
                        backgroundColor: '#ffffff',
                        color: '#0F1113',
                      }}
                      onFocus={(e) => {
                        if (!error) {
                          e.target.style.borderColor = '#2CACE8';
                          e.target.style.boxShadow = '0 0 0 4px rgba(44, 172, 232, 0.1)';
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = error ? '#fca5a5' : '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="e.g., Software Engineer, Product Manager, Researcher"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    <label
                      htmlFor="purpose"
                      className="block text-[#0F1113] text-sm font-medium"
                      style={{ fontFamily: "'Instrument Sans', sans-serif", letterSpacing: '-0.025em' }}
                    >
                      Purpose for Using Humanyl Web Agents <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      id="purpose"
                      name="purpose"
                      required
                      rows={5}
                      className="w-full px-4 outline-none transition-all duration-200 text-base resize-none"
                      style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        paddingTop: '0.875rem',
                        paddingBottom: '0.875rem',
                        borderWidth: '2px',
                        borderColor: error ? '#fca5a5' : '#e5e7eb',
                        borderRadius: '0.75rem',
                        backgroundColor: '#ffffff',
                        color: '#0F1113',
                      }}
                      onFocus={(e) => {
                        if (!error) {
                          e.target.style.borderColor = '#2CACE8';
                          e.target.style.boxShadow = '0 0 0 4px rgba(44, 172, 232, 0.1)';
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = error ? '#fca5a5' : '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Describe how you plan to use Humanyl web agents in your work or projects..."
                    />
                  </div>

                  {error && (
                    <div
                      className="text-center py-4 px-4 rounded-xl border shadow-sm"
                      style={{ 
                        fontFamily: "'Instrument Sans', sans-serif",
                        backgroundColor: '#fef2f2',
                        color: '#b91c1c',
                        borderColor: '#fecaca'
                      }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {error}
                      </div>
                    </div>
                  )}

                  <div style={{ paddingTop: '1rem' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-white rounded-full px-8 text-base font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                      style={{ 
                        fontFamily: "'Instrument Sans', sans-serif",
                        backgroundColor: isSubmitting ? '#2CACE8' : '#2CACE8',
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                        boxShadow: '0 10px 15px -3px rgba(44, 172, 232, 0.2), 0 4px 6px -2px rgba(44, 172, 232, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor = 'rgba(44, 172, 232, 0.9)';
                          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(44, 172, 232, 0.25), 0 10px 10px -5px rgba(44, 172, 232, 0.15)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2CACE8';
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(44, 172, 232, 0.2), 0 4px 6px -2px rgba(44, 172, 232, 0.1)';
                      }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg
                            className="w-5 h-5 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Submitting...</span>
                        </span>
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}


