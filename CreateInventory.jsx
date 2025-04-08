import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateInventory = () => {
  const navigate = useNavigate();

  const [object, setObject] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [type, setType] = useState("");
  const [team, setTeam] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!object || !date || !type || !team) {
      setError("Будь ласка, заповніть усі поля перед збереженням");
      return;
    }

    const newTask = { object, date, type, team, status: "Очікує підтвердження" };
    const existing = localStorage.getItem("inventoryTasks");
    const allTasks = existing ? JSON.parse(existing) : [];
    allTasks.push(newTask);
    localStorage.setItem("inventoryTasks", JSON.stringify(allTasks));
    navigate("/dashboard");
  };

  return (
    <div className="p-6 space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Створення інвентаризації</h1>

      {error && <p className="text-red-600 font-medium">{error}</p>}

      <div className="flex flex-col gap-1">
        <label>Об'єкт:</label>
        <select value={object} onChange={(e) => setObject(e.target.value)} className="border rounded p-2">
          <option value="">Оберіть об'єкт</option>
          <option value="Київ, Хрещатик, 10">Київ, Хрещатик, 10</option>
          <option value="Львів, Свободи, 25">Львів, Свободи, 25</option>
          <option value="Одеса, Дерибасівська, 8">Одеса, Дерибасівська, 8</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label>Дата інвентаризації:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border rounded p-2" />
      </div>

      <div className="flex flex-col gap-1">
        <label>Тип інвентаризації:</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="border rounded p-2">
          <option value="">Оберіть тип</option>
          <option value="Матеріальні активи">Матеріальні активи</option>
          <option value="Товарні запаси">Товарні запаси</option>
          <option value="Незавершене виробництво">Незавершене виробництво</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label>Команда / Підрядник:</label>
        <input
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          placeholder="Введіть назву або ПІБ"
          className="border rounded p-2"
        />
      </div>

      <div className="pt-4">
        <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Зберегти завдання
        </button>
      </div>
    </div>
  );
};

export default CreateInventory;
