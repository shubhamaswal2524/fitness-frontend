import { ReactNode } from "react";

interface ProfileCardProps {
  title: string;
  routine: string;
  workouts: ReactNode | any;
}

const DailyTask = ({ title, routine, workouts }: ProfileCardProps) => {
  return (
    <>
      <div className="daily_task_card">
        <h2 className="routine">{routine}</h2>
        <div className="text_content">
          <h2>{title}</h2>
          <ul>
            {/* <li>
              <h4>{workoutName}</h4>
              <h5>{workoutExercise}</h5>
              <p>Reps :<span>{workoutReps}</span></p>
              <p>Sets :<span>{workoutSets}</span></p>
            </li> */}
            {workouts.map((workout, index) => (
              <li key={index}>
                <h4>{workout.workoutName}</h4>
                <h5>{workout.workoutExercise}</h5>
                <div className="inner">
                <p>
                  Reps : <span>{workout.workoutReps}</span>
                </p>
                <p>
                  Sets : <span>{workout.workoutSets}</span>
                </p>
                </div>
               
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DailyTask;
