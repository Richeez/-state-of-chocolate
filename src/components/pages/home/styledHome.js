import styled from "styled-components";

export const StyledHome = styled.div`
background: url(images/bg-img.jpeg), no-repeat;
width: 100%;
min-height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
position: relative;
flex-direction: column;
background-color: var(--transparent-black);
background-blend-mode:multiply;

.main-header{
    display: flex;
/* align-items: center; */
justify-content: center;
gap: 2rem;
  color: var(--white-color);
backdrop-filter:blur(.2rem);
position: relative;
flex-direction: column;
padding: 1rem;
border-radius: 1rem;
width: clamp(400px, 2vw + 5px, 50rem);
background: linear-gradient(to bottom right, var(--lighter-white-color), var(--lighter-white-color), var(--light-white-color));
p{
    text-align: left;
    font-size: 2.5rem;
    width: max-content;
    font-family: 'Tangerine', cursive;
    text-transform: capitalize;

}

h1{
    font-size: 2.3rem;
    text-align: center;
    text-transform: capitalize;
}

}
`;