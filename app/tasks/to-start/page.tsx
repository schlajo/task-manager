'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from '../../components/TaskCard';

const ToStartPage = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      const toStartTasks = response.data.filter((task: { status: string; }) => task.status === 'TO_START');
      setTasks(toStartTasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">To Start Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onUpdate={fetchTasks} />
        ))}
      </div>
    </div>
  );
};

export default ToStartPage;
