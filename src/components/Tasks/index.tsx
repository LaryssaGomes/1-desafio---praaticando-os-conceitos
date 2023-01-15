import styles from "./tasks.module.css";
import { TbClipboardText, TbTrash } from "react-icons/tb";
import { ITask } from "../../App";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface TasksProps {
    tasks: ITask[];
    onComplete: (taskId: string) => void;
    onDelete: (taskId: string) => void;
  }
  
export function Tasks({ tasks, onComplete, onDelete }: TasksProps) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasksQuantity}</span>
          </div>
  
          <div>
            <p className={styles.textPurple}>Concluídas</p>
            <span>
              {completedTasks} de {tasksQuantity}
            </span>
          </div>
        </header>
  
        <div className={styles.list}>
          {tasks.map((task) => (
              <div className={styles.item}>
              <button
                className={styles.checkContainer}
                onClick={() => onComplete(task.id)}
              >
                {task.isCompleted && <BsFillCheckCircleFill /> }
              </button>
        
              <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
              </p>
        
              <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
              </button>
            </div>
          ))}
  
          {tasks.length <= 0 && (
            <section className={styles.noTask}>
              <TbClipboardText size={50} />
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </section>
          )}
        </div>
      </section>
    );
}