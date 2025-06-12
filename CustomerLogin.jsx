import React, { useState } from "react";
import { auth, RecaptchaVerifier } from "../firebase/firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";

const CustomerLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const requestOtp = async () => {
    if (phone.length !== 10) {
      alert("कृपया 10 अंकों का मोबाइल नंबर डालें");
      return;
    }

    window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
      size: "invisible"
    }, auth);

    try {
      const result = await signInWithPhoneNumber(auth, "+91" + phone, window.recaptchaVerifier);
      setConfirmationResult(result);
      setShowOtp(true);
      alert("OTP भेज दिया गया है!");
    } catch (error) {
      console.error(error);
      alert("OTP भेजने में त्रुटि हुई");
    }
  };

  const verifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      alert("✅ लॉगिन सफल!");
    } catch (error) {
      alert("❌ OTP गलत है");
    }
  };

  return (
    <div>
      <h2>कस्टमर OTP लॉगिन</h2>
      <input
        type="text"
        placeholder="मोबाइल नंबर"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div id="recaptcha-container" />
      {!showOtp ? (
        <button onClick={requestOtp}>OTP भेजें</button>
      ) : (
        <>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>OTP सत्यापित करें</button>
        </>
      )}
    </div>
  );
};

export default CustomerLogin;