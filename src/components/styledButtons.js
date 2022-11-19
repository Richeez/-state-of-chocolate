import styled from "styled-components";

export const Button = styled.button`
width: 10rem;
height: 3rem;
border-radius: 25px;
white-space: nowrap;
font-size: 1.5rem;
font-weight: bold;
outline: none;
/* border: none; */
border: 2px solid var(--darker-chocolate);
margin: 0 auto;
cursor: pointer;
text-transform: capitalize;
/* background-color: var(--white-color); */
position: relative;
overflow: hidden;
backdrop-filter:blur(.2rem);
background: linear-gradient(to bottom right, var(--lighter-white-color), var(--lighter-white-color), var(--light-white-color));

&::before,::after{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    text-align: center;
    
    width: 100%;
    transition: all 1s ease-in-out;
    height: 0;
    /* z-index: -1; */
    /* bottom: 0; */
    
}

&::before{
    content: 'yummy';
    top: 0;
    transition: all 1s ease-in-out;
    background-color: var(--white-color);
    color: var(--darker-chocolate);
    
    
    
    
}

&::after{
    content: 'buy now';
    background-color: var(--light-chocolate) ;
    color: var(--white-color);
    bottom: -2rem;
    transform: translateY(200%);
    transition: all 1s ease-in-out;



}

&:hover::after{
    top: 0;
    transform: translateY(0);
    bottom:0;

    height: 100%;
    transition: all 1s ease-in-out;

}
&:not(:hover)::before{
    bottom: 0;
    height: 100%;
    transition: all .5s ease-in-out;

}
`;