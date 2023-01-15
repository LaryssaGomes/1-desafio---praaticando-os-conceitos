import logo from "../../assets/todoLogo.svg"
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";

interface HeaderProps {
    onAddTask: (taskTitle: string) => void;
  }

export function Header({ onAddTask }: HeaderProps) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
      event.preventDefault();
  
      onAddTask(title);
      setTitle("");
    }
  
    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
      setTitle(event.target.value);
    }

    return (
    <header className={styles.header} >
        <img src={logo} />
        <form onSubmit={handleSubmit} className={styles.form}>
            <input placeholder="Adicione uma nova tarefa"  onChange={onChangeTitle} name="title"/>
            <button type="submit"> Criar  <AiOutlinePlusCircle size={20} /></button>
        </form>
    </header>
    );
}