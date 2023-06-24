import React from "react";

function Tasks({ task }) {
    return (
            <form>
                <input type="checkbox"  />
                <span>{task}</span>
            </form>
    );
}

export default Tasks;