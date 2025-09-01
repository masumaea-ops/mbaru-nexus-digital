export const GoogleMap = () => {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8158!2d36.7773!3d-1.2937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzcuMyJTIDM2wrA0NiczOC4zIkU!5e0!3m2!1sen!2ske!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mbaru Technologies Office Location - Adams Arcade, Nairobi"
      ></iframe>
    </div>
  );
};