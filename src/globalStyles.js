import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`

:root{
  --light-chocolate:#d2691e;
  --lighter-chocolate:rgba(236, 130, 9, 0.445);
  --dark-chocolate:#9b5606;
  --darker-chocolate:#9b5606;
  --white-color:#ffff;
  --font-family:  "Poppins", sans-serif;
  --light-white-color: rgba(255, 255, 255, 0.211);
  --lighter-white-color: rgba(255, 255, 255, 0.111);
  --transparent-black: rgba(0, 0, 0, 0.638);
  --black-color:#000000;
}

.header{
  background-color: var(--dark-chocolate);
  transition: all 1s ease-in-out;
  height: 100px;
  display: flex;
  align-items: flex-end;
  /* justify-content: flex-start; */
  padding-top: 5rem ;

  & > {
    margin-top: 4rem;
  }
}
.open{
  @media screen and (max-width: 40rem) {
    width: 50%;
    opacity: 1;
    pointer-events: all;
  user-select: all;
  transition: all 1s ease-in;
    
  }
} 

.animate{
        &::after,::before{
            background-color: var(--darker-chocolate);
            border-top-left-radius: 30%;
            transition: all 1s ease-in-out;
            /* height: .25rem; */
        border-bottom-left-radius: 30%;
        }
        
    &::before{
    content: '';
    top: -300%;
    width: 80%;
    position: absolute;
    transform: rotate(110deg);
    /* transform-origin: top left; */
    }

    &::after{
    content: '';
    top: 300%;
    position: absolute;
    /* transform: rotate(40deg); */
    width: 80% !important;

    }

    .center{
    width: 40% !important;
    height: .25rem;
    /* opacity: 0; */
    /* display: none; */
    transition: all 1s ease-in-out;
    border-top-left-radius: 30%;
     border-bottom-left-radius: 30%;
    background-color: var(--darker-chocolate);
    transition: transform .5s ease-in-out;
    }

    }
.animator{
    width: 50px;
    height: 50px;
    border-radius: .5rem;
    background-color: var(--darker-chocolate);
    color: var(--white-color);
    cursor: pointer;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    transition: transform .5s ease-in-out;

    .bugger{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform .5s ease-in-out;

    &::before{
    content: '';
    top: 15%;
    width: 2rem;
    height: .2rem;
    position: absolute;
    transform: rotate(45deg);
    transition: transform .5s ease-in-out;
    background-color: var(--white-color);
    }

    &::after{
    content: '';
    width: 2rem;
    height: .2rem;
    top: 300%;
    position: absolute;
    transition: transform .5s ease-in-out;
    transform: rotate(125deg);
    background-color: var(--white-color-01);
    }

    .center{
    width: 2rem;
    height: .2rem;
    background-color: var(--white-color);
    display:none;
    transition: transform .5s ease-in;
    }

    }

    }
*,*::before,*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-padding-top: 10rem;
  
}

body{
  font-size: 1.1rem;
  font-family: var(--font-family);
  /* color: var(--white-color); */

}
.heading{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  text-transform: capitalize;

  h2{
    font-size: 2rem;
    font-family: 'Tangerine', cursive;
    color: var(--darker-chocolate) ;
    box-shadow: 0 4px 5px var(--darker-chocolate);
    padding: 0 2rem;
    margin-bottom: 1rem;
    border: 0;
    border-radius: 2rem;

  }
  p{
    font-size: 1.5rem;

 
  }
}
::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.2rem;
  background-color:var(--white-color); 
  
}

::-webkit-scrollbar-track {
  /* -webkit-margin-before: 6rem; */
  /* margin-block-start: 6rem; */
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: inset 0 0 6px var(--white-color);
  /* background:var(); */
  /* -webkit-box-shadow: inset 0 0 6px var(--transparent-color-02); */
}


::-webkit-scrollbar-thumb {
  background-color:var(--dark-chocolate);
  border-radius: 1rem;
  border: 2px inset var(--dark-chocolate);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}  

p{
  line-height: 1.6;

}  




`;

export default Globalstyles