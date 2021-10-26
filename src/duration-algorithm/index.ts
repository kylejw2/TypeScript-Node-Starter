export interface TaskType {
  duration: number
  id: number
  dependency: number
}

const durationAlgorithm = (tasks: TaskType[]): number => {
  const pathDurations: number[] = [];
  const visited: Record<number, number> = {};
  const tasksObj: Record<number, TaskType> = {};
  const dependencies: Record<string | number, number[]> = {};
  const base: TaskType[] = [];

  tasks.forEach(task => {
    tasksObj[task.id] = {...task};

    if (!task.dependency) {
      base.push(task);
    } else {

      if (task.id === task.dependency) throw new Error("Task cannot be dependent on itself");

      dependencies[task.dependency] = 
        dependencies[task.dependency] ? [...dependencies[task.dependency], task.id] : [task.id];
    }
  });
  
  const calculateDuration = (duration: number, dependencyId: number) => {
    visited[dependencyId] = 1;
    if (!dependencies[dependencyId]) pathDurations.push(duration + tasksObj[dependencyId].duration);
    else {
      for (let i = 0; i < dependencies[dependencyId].length; i++) {
        calculateDuration(duration + tasksObj[dependencyId].duration, dependencies[dependencyId][i]);
      }
    }
  };

  base.forEach(task => calculateDuration(0, task.id));

  if (Object.keys(visited).length < tasks.length) throw new Error("Circular dependency");

  let duration = 0;
  pathDurations.forEach(dur => {
    if (dur > duration) duration = dur;
  });
  return duration;
};

export default durationAlgorithm;