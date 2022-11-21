import { useState } from "react";
import { Button, Container } from "../../styled";
import { StyledContact } from "./styledContact";

const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //?submit to api
    console.log(formData, "as formData");
  };
  return (
    <Container>
      <div className="heading">
        <h2>contact us</h2>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <StyledContact ref={contact}>
          <div className="contact">
            <div className="input-cont span-col-2">
              <input
                placeholder="name "
                name="name"
                value={formData.name}
                onChange={handleForm}
                type="text"
                required
              />
              <input
                placeholder="phone number"
                name="number"
                value={formData.number}
                onChange={handleForm}
                type="tel"
                required
              />
            </div>
            <input
              className="span-col-2"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleForm}
              type="email"
              required
            />
            <textarea
              className="span-col-2"
              placeholder="message..."
              name="message"
              value={formData.message}
              onChange={handleForm}
              cols="30"
              rows="10"
              required
            ></textarea>
            <div className="submit-btn span-col-2">
              <Button>send</Button>
            </div>
          </div>
        </StyledContact>
      </form>
    </Container>
  );
};

export default Contact;
