export interface TaskType {
  duration: number
  id: number
  dependency: number
}

const durationAlgorithm = (tasks: TaskType[]): number => {
  const duration = 0;
  const visited = [];
  const dependencies: any = {};
  tasks.map(task => {
    dependencies[task.dependency] = [...dependencies[task.dependency], task.id];
  });
  const base = tasks.filter(task => task.dependency !== null);

  tasks.forEach(task => {

  });



  return duration;
};

export default durationAlgorithm;