import React from 'react';

const services = [
  { name: "इलेक्ट्रीशियन", image: "electrician.jpg" },
  { name: "प्लंबर", image: "plumber.jpg" },
  { name: "CCTV", image: "cctv.jpg" },
  { name: "कैफे", image: "cafe.jpg" },
  { name: "कपड़े की दुकान", image: "clothes.jpg" },
];

const Services = () => {
  return (
    <div>
      <h2>हमारी सेवाएँ</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.image} alt={service.name} />
            <p>{service.name}</p>
            <a href="https://wa.me/918890784773" target="_blank" rel="noreferrer">
              WhatsApp पर पूछें
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;