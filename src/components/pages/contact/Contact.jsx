import { useState, useRef } from "react";
import { Button, Container } from "../../styled";
import { StyledContact } from "./styledContact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const formEl = useRef(null);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // const successMsg = () => {
  //   return <p></p>;
  // };
  // const errorMsg = () => {
  //   return <p></p>;
  // };

  const Success = () => {
    toast.success("message sent successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      toastId: "01",
    });
  };

  const Fail = () => {
    toast.error("failed, check your internet connection", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      toastId: "02",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //?submit to api
    emailjs
      .sendForm(
        "service_q22dgkp",
        "template_ofy3nao",
        formEl?.current,
        "29M5Koc4rzmoaIM1N"
      )
      .then(
        (result) => {
          //? show the user a success message
          console.log(result.status, "as status");
          setMessage("success");
          setTimeout(() => {
            setMessage("");
            toast.dismiss();
          }, 5000);
        },
        (error) => {
          //? show the user an error message
          setMessage("fail");
          setTimeout(() => {
            setMessage("");
            toast.dismiss();
          }, 5000);
        }
      );
    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };
  return (
    <Container>
      <div className="heading">
        <h2>contact us</h2>
      </div>
      <form ref={formEl} onSubmit={handleSubmit}>
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
              <Button>
                {message === "success" ?? message === "fail"
                  ? "sending..."
                  : "send"}
              </Button>
            </div>
            <div className="responseBox">
              {message === "success" && <Success />}
              {message === "fail" && <Fail />}
            </div>
          </div>
        </StyledContact>
      </form>
      <ToastContainer />
    </Container>
  );
};

export default Contact;
