
interface ProfileCardProps {
  title: string;
  workoutName: string;
  workoutExercise: string;
  workoutSets: string;
  workoutReps: string;
  routine:string;
}

const DailyTask = ({
  title,
  workoutName,
  workoutExercise,
  workoutSets,
  workoutReps,
  routine,
}: ProfileCardProps) => {
  return (
    <>
      <div className="daily_task_card">
        <h2 className="routine">{routine}</h2>
        <div className="text_content">
          <ul>
            <li>
              <h2>{title}</h2>
            </li>
            <li>
              <span>{workoutName}</span>
              <h5>{workoutExercise}</h5>
              <p>{workoutReps}<span>{workoutSets}</span></p>
            </li>
           
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default DailyTask;
