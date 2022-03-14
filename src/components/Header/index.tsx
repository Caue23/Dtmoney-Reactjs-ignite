import logoImg from "../../assets/logo.svg"
import React,{useState} from "react";
import Modal from "react-modal";
import { Container, Content  } from "./style";

interface Headerprops{
    onOpenNewTransitionModal: () => void;
    
}

export function Header({onOpenNewTransitionModal}: Headerprops){
    
    return(
        <Container>
            <Content>
                <img src = {logoImg} alt="caue money"/>
                    <button type="button" onClick = {onOpenNewTransitionModal}>
                     Nova transação    
                </button>
                
            </Content>
        </Container>
    )
}