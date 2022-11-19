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
    transition: transform .5s ease-in-out;
    transform: rotate(0deg);
    width: 50%;

    }

    .center{
    width: 70%;
    height: .25rem;
    border-top-left-radius: 30%;
     border-bottom-left-radius: 30%;
    background-color: var(--darker-chocolate);
    transition: transform .5s ease-in-out;
    }

    }



    .nav-bar-close{
    width: 50px;
    height: 50px;
    border-radius: .5rem;
    background-color: var(--darker-chocolate);
    color: var(--white-color);
    cursor: pointer;
    position: absolute;
    display: none;
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


`;