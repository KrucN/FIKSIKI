import { useState } from "react";

function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, { text: task, completed: false }]);
        setTask("");
    };

    const toggleTask = (index) => {
        const updated = tasks.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
        );
        setTasks(updated);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h1 style={styles.title}>📝 Мій список задач</h1>

                <div style={styles.inputRow}>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Введи задачу..."
                        style={styles.input}
                    />
                    <button onClick={addTask} style={styles.addBtn}>
                        Додати
                    </button>
                </div>

                <ul style={styles.list}>
                    {tasks.map((t, index) => (
                        <li key={index} style={styles.listItem}>
                            <span
                                onClick={() => toggleTask(index)}
                                style={{
                                    ...styles.taskText,
                                    textDecoration: t.completed ? "line-through" : "none",
                                    color: t.completed ? "gray" : "#222",
                                }}
                            >
                                {t.text}
                            </span>

                            <button
                                onClick={() => deleteTask(index)}
                                style={styles.deleteBtn}
                            >
                                Видалити
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const styles = {
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1e1e2f",
        fontFamily: "Arial, sans-serif",
    },
    card: {
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "12px",
        width: "400px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    },
    title: {
        textAlign: "center",
        color: "#222",
    },
    inputRow: {
        display: "flex",
        marginBottom: "20px",
    },
    input: {
        flex: 1,
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
    },
    addBtn: {
        marginLeft: "10px",
        padding: "10px 15px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
    list: {
        listStyle: "none",
        padding: 0,
    },
    listItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
    },
    taskText: {
        cursor: "pointer",
        fontSize: "16px",
    },
    deleteBtn: {
        backgroundColor: "#e74c3c",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "6px",
        cursor: "pointer",
    },
};

export default App;