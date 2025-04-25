import CommonCheckbox from "@/components/common/commonCheckbox/commonCheckbox";
import CommonTable from "@/components/common/commonTable/commonTable";
import { Col, Container, Row } from "react-bootstrap";
import { LeftIcon, RightIcon } from "../../../../public/assets/icons";
import Link from "next/link";

const DailyDiet = () => {
  const data = [
    {
      id: 1,
      itemname: "avocado",
      calories: "250cal",
      ingredients: "avocado,bread,toast",
      time: "15 mint",
      state: "in progress",
    },
    {
      id: 2,
      itemname: "avocado",
      calories: "250cal",
      ingredients: "avocado,bread,toast",
      time: "15 mint",
      state: "in progress",
    },
    {
      id: 3,
      itemname: "avocado",
      calories: "250cal",
      ingredients: "avocado,bread,toast",
      time: "15 mint",
      state: "in progress",
    },
    {
      id: 4,
      itemname: "avocado",
      calories: "250cal",
      ingredients: "avocado,bread,toast",
      time: "15 mint",
      state: "in progress",
    },
    {
      id: 5,
      itemname: "avocado",
      calories: "250cal",
      ingredients: "avocado,bread,toast",
      time: "15 mint",
      state: "in progress",
    },
    
  ];

  return (
    <section className="dailyDiet">
      <Container>
        <div className="dailyDiet_in">
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
                fields={["itemname", "calories", "ingredients", "ingredients", "state"]}
              >
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.itemname}</td>
                    <td>{item.calories}</td>
                    <td>{item.ingredients}</td>
                    <td>{item.ingredients}</td>
                    <td className={item.state}>{item.state}</td>
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

export default DailyDiet;
