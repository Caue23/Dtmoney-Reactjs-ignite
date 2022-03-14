import React, {useState} from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyles } from "./styles/global";
import {TransactionsProvider } from "./Hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);
  
    
    function handleOpenNewTransactionModal(){
        setNewTransactionModalOpen(true);
    }
    function handleCloseNewTransactionModal(){
        setNewTransactionModalOpen(false);
    }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
        isOpen= {isNewTransactionModalOpen}
        onRequestClose= {handleCloseNewTransactionModal}
      />
      <GlobalStyles/>
    </TransactionsProvider>
  );
}


