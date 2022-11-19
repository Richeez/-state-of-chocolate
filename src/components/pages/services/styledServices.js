import styled from 'styled-components'

export const StyledServices = styled.div`
/* background-color: var(--light-chocolate); */
border-radius: 1rem;
max-width: 90rem;
margin: 0 auto;
display: grid;
padding: 1%;
gap: 2rem;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

.services{
    overflow: hidden;
    border-radius: 1rem;
    min-height: 300px;
    box-shadow: 2px 2px 5px;

    &:hover .service {
        .service-desc{
            bottom: 40%;
            opacity: 1;

        }
        &:hover .overlay {
          opacity: 1;
              /* overflow: hidden; */
        }
}


    .service{
        width: 100%;
        height: 100%;
        position:relative;
        color: var(--white-color);

        .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      background: linear-gradient(rgba(0, 0, 0, 0.5), #deb887);
      opacity: 0;
      transition: 1s;
    }
    .service-desc {
  width: 80%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: 1s;

  hr {
  background: #fff;
  height: 2px;
  border: 0;
  margin: 15px 0;
  width: 60%;
}
 p {
  font-size: 14px;
}

h3{
    font-size: 1rem;
    text-transform: capitalize;
}
}
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}





`;