import styled from "styled-components";

export const StyledMenu = styled.div`
    width: 50px;
    height: 50px;
    border-radius: .5rem;
    background-color: var(--white-color);
    cursor: pointer;
    position: absolute;
    display: flex;
        align-items: center;
        justify-content: center;

    right: 5%;
    top: 80%;
    transform: translateY(-50%);
    z-index: 99;

    @media screen and (min-width: 45rem) {
        display: none;

        /* background-color: orangered; */
        
    }
    
    @media screen and (min-width: 64rem) {
display: none;   
    }
    
    .bugger{
        width: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: transform .5s ease-in-out;
        padding-right: .25rem;

        &::after,::before{
            background-color: var(--darker-chocolate);
            border-top-left-radius: 30%;
            height: .25rem;
            transition: all 1s ease-in-out;
        border-bottom-left-radius: 30%;

        }
        
    &::before{
    content: '';
    top: -300%;
    width: 80%;
    position: absolute;
    transform: rotate(0deg);

    }

    &::after{
    content: '';
    top: 300%;
    position: absolute;
    transform: rotate(0deg);
    width: 50%;

    }

    .center{
    width: 70%;
    height: .25rem;
    border-top-left-radius: 30%;
     border-bottom-left-radius: 30%;
    background-color: var(--darker-chocolate);
    transition: all 1s ease-in-out;
    }

    }






`;