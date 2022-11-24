import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "../../styled";
import { StyledServices } from "./styledServices";

const Services = ({ services }) => {
  return (
    <Container>
      <div className="heading">
        <h2>services</h2>
        <p>get the best deal and fast delivery</p>
      </div>
      <StyledServices ref={services}>
        <div className="pricing span-col-2">
          <div className="item">
            <FontAwesomeIcon
              className="icon"
              icon={["fa", "money-check-dollar"]}
            />
            <div className="text">
              <h3>affordable cost</h3>
              <p>You can get chocolate bar as low as eight dollars plus shipping</p>
            </div>
          </div>
          <div className="item">
            <FontAwesomeIcon className="icon" icon={["fa", "pen-square"]} />
            <div className="text">
              <h3>customize logo</h3>
              <p> We can customize your own chocolate bar logo </p>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="service ">
            <img src="images/service-3-resized.jpeg" alt="" />
            <div className="overlay"></div>
            {/* <div className="service-desc">
              <h3>Making your fresh order</h3>
              <hr />
               <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur sed mollitia provident explicabo consequuntur enim a
              </p> 
            </div> */}
          </div>
        </div>
        <div className="services">
          <div className="service">
            <img src="images/service-1-resized.jpeg" alt="" />
            <div className="overlay"></div>
            {/* <div className="service-desc">
              <h3>ready to be delivered anytime</h3>
              <hr />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur sed mollitia provident explicabo consequuntur enim a
              </p>
            </div> */}
          </div>
        </div>
        <div className="services">
          <div className="service">
            <img src="images/service-2-resized.jpeg" alt="" />
            <div className="overlay"></div>
            {/* <div className="service-desc">
              <h3>Handy made chocolates</h3>
              <hr />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur sed mollitia provident explicabo consequuntur enim a
              </p>
            </div> */}
          </div>
        </div>
        <div className="services">
          <div className="service">
            <img src="images/service-4-resized.jpeg" alt="" />
            <div className="overlay"></div>
            {/* <div className="service-desc">
              <h3>chocolates with label</h3>
              <hr />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur sed mollitia provident explicabo consequuntur enim a
              </p>
            </div> */}
          </div>
        </div>
      </StyledServices>
    </Container>
  );
};

export default Services;
