function initiatePayment() {
    // सिमुलेटेड पेमेंट गेटवे इंटीग्रेशन (Google Pay/PhonePe/Paytm)
    alert("पेमेंट गेटवे पर रीडायरेक्ट हो रहा है...");
    // यहाँ आप Razorpay, Paytm या अन्य API इंटीग्रेट कर सकते हैं
    setTimeout(() => {
        document.getElementById("agent-info").style.display = "block";
    }, 2000); // पेमेंट सक्सेस के बाद डिटेल्स दिखाएँ
}

document.getElementById("register-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    if (document.getElementById("agreement").checked) {
        alert("रजिस्ट्रेशन सफल! डॉक्युमेंट अपलोड हो रहा है...");
        this.submit();
    } else {
        alert("कृपया एग्रीमेंट साइन करें।");
    }
});

// सर्विस पेज पर डायनामिक टाइटल
const urlParams = new URLSearchParams(window.location.search);
const serviceId = urlParams.get('service');
if (serviceId && document.getElementById("service-title")) {
    document.getElementById("service-title").innerText = `सर्विस ${serviceId}`;
}