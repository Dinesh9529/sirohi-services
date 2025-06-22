function sendOtp() {
  const phone = document.getElementById("phone").value.trim();

  fetch("https://sirohi-backend.onrender.com/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("OTP ???? ??? ??!");
    } else {
      alert("????: " + data.message);
    }
  })
  .catch(error => {
    alert("Network error: " + error.message);
  });
}
