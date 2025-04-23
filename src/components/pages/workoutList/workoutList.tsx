import CommonCheckbox from "@/components/common/commonCheckbox/commonCheckbox";
import CommonTable from "@/components/common/commonTable/commonTable";
import { Col, Container, Row } from "react-bootstrap";
import { LeftIcon, RightIcon } from "../../../../public/assets/icons";
import Link from "next/link";

const WorkoutList = () => {
  const data = [
    {
      id: 1,
      routine: "pull",
      workout: "ChestPresses",
      muscle: "Flat Bench Press (Barbell)",
      sets: 3,
      reps: 10,
    },
    {
      id: 2,
      routine: "pull",
      workout: "DeltsFront",
      muscle: "Overhead Press: Seated 75 Deg. (Dumbbell)",
      sets: 3,
      reps: 15,
    },
    {
      id: 3,
      routine: "push",
      workout: "ChestPresses",
      muscle: "Low Incline Bench Press (Dumbbell)",
      sets: 3,
      reps: 20,
    },
    {
      id: 4,
      routine: "push",
      workout: "DeltsSide",
      muscle: "Side Lateral Raise (LR): Standing (Cable)",
      sets: 3,
      reps: 20,
    },
    {
      id: 5,
      routine: "push",
      workout: "ChestFlys",
      muscle: "Cable Crossovers: High Pulley",
      sets: 3,
      reps: 20,
    },
    {
      id: 6,
      routine: "push",
      workout: "TricepsMidRange",
      muscle: "Skullcrusher: Flat (EZ Bar)",
      sets: 3,
      reps: 20,
    },
    {
      id: 7,
      routine: "push",
      workout: "TricepsLengthened",
      muscle: "Overhead Double Arm Tricep Extension: Seated (Dumbbell)",
      sets: 3,
      reps: 20,
    },
  ];

  return (
    <section className="workout_list">
      <Container>
        <div className="workout_list_in">
          <Row>
            <Col lg={12}>
              <div className="workout_filter">
                <h2>
                  Day : <span>Monday</span>
                </h2>
                <CommonCheckbox
                  id="Done"
                  label="Done"
                  className="workout_filter_checkbox"
                />
              </div>
              <CommonTable
                fields={["routine", "Workout", "Muscle", "Sets", "Reps"]}
              >
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.routine}</td>
                    <td>{item.workout}</td>
                    <td>{item.muscle}</td>
                    <td>{item.sets}</td>
                    <td>{item.reps}</td>
                  </tr>
                ))}
              </CommonTable>
            </Col>
          </Row>
        </div>
        <div className="custum_pagination">
          <ul>
            <li className="prev"><Link href="#"  className="active"><LeftIcon/></Link></li>
            <li ><Link href="#">Today</Link></li>
            <li className="next"><Link href="#"><RightIcon/></Link></li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default WorkoutList;
