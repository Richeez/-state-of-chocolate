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
padding-block: 8.5rem;
position: relative;
flex-direction: column;
background-color: var(--transparent-black);
background-blend-mode:multiply;

@media screen and (min-width: 45rem) {
    min-height: 100vh;

        
        
    }

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
width: clamp( 200px, 45rem, 80vw);
background: linear-gradient(to bottom right, var(--lighter-white-color), var(--lighter-white-color), var(--light-white-color));
p{
    text-align: left;
    font-size: 2.5rem;
    font-weight: bold;
    width: max-content;
    font-family: 'Tangerine', cursive;
    text-transform: capitalize;

}

h1{
    font-size: 2.2rem;
    text-align: center;
    text-transform: capitalize;
}

}
`;