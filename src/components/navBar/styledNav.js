import styled from "styled-components";

export const Header = styled.header`
height: fit-content;
padding: 1%;
position: fixed;
height: 4.4rem;
z-index: 90;
left: 0;
right: 0;
top: 0;
/* background-color: var(--lighter-chocolate); */
`;

export const Nav = styled.nav`
width: 100%;
position: relative;
display: flex;
padding: 1%;
align-items: center;
font-size: 1.2rem;
justify-content: space-between;

`;
export const LinkCont = styled.ul`
width: 0;
opacity: 0;
pointer-events: none;
user-select: none;
transition: all 1s ease-in-out;
background-color: var(--lighter-chocolate);
top: -50%;
margin-top: 8rem;
color: var(--white-color);
border-radius: 1rem 0 0 1rem ;
padding: 1rem;
right: -2%;
flex-direction: column;
min-height: 10vh;
position: absolute;
align-items: center;
justify-content: flex-start;
gap: 2rem;




@media screen and (min-width: 45rem) {
        display: flex;
        width: fit-content;
        flex-direction: row;
        height: 4.4rem;
        opacity: 1;
        position: relative;
        pointer-events: all;
user-select: all;
transition: all 1s ease-in;
        margin: 0;
        background-color: unset;

        
        
    }
    
    @media screen and (min-width: 64rem) {
display: flex; 
flex-direction: row;
height: 4.4rem;
opacity: 1;
        position: relative;
        pointer-events: all;
user-select: all;
transition: all 1s ease-in;



    }



`;
export const NavLink = styled.li`
list-style: none;
    cursor: pointer;
    position: relative;
    /* display: block; */
    padding: .5rem 0;
    white-space: nowrap;

    &:hover::after,:focus::after{ 
    width: 100%;
    opacity: 1;
    transition: all 1s ease-in-out;
    }


    &::after,:focus::after {
    content: '';
    position: absolute;
    width:0;
    opacity: 0;
    transition: all 1s ease-in-out;
    background-color: var(--white-color);
    height: .19rem;
    bottom: 0;
    left: 0;
    /* transform: translateX(-50%); */
    }


`;
export const Link = styled.a`
text-decoration: none;
color: var(--white-color);
text-transform: capitalize;

`;
export const Brand = styled.div`
width: 12.5rem;
height: 5rem;
display: flex;
align-items: flex-end;
justify-content: flex-start;
@media screen and (max-width: 40rem) {
margin-top : .5rem;
  }

`;
export const BrandLogo = styled.img`
width: 100%;
max-width:fit-content;
height: 100%;
margin-left: 1rem;
object-fit: contain;

`;