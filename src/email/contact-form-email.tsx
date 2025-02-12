import { ContactForm } from '@/lib/types';

const ContactFormEmail: React.FC<Readonly<ContactForm>> = ({ name, email, message, phone }) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Message: {phone}</h2>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
