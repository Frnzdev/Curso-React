import { ChevronRightIcon, TrashIcon, CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";


function Tasks({ tasks, OnTaskClick, OnDeleteTaskClick }) {
    const navigate = useNavigate();

    function OnSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set('title', task.title);
        query.set('description', task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => OnTaskClick(task.id)}
                        className={`bg-slate-400 w-full text-white text-left flex items-center gap-2 p-2 rounded-md ${task.isCompleted && 'line-through'}`}
                    >
                        {task.isCompleted && <CheckIcon />}
                        {task.title}

                    </button>
                    <Button onClick={() => OnSeeDetailsClick(task)}>
                        <ChevronRightIcon />
                    </Button>
                    <Button onClick={() => OnDeleteTaskClick(task.id)}>
                        <TrashIcon />
                    </Button>
                </li>
            ))}
            </ul>

        </div >
    )
}

export default Tasks;