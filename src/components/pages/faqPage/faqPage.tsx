import MarqueeBar from "@/components/common/marqueeBar/marqueeBar";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const FaqPage = () => {
  return (
    <section className="faq_page">
      <div className="contact_us_head">
        <h1 className="main_heading">
          FAQ'<span>s</span>
        </h1>
        <p>Home / Faq's</p>
      </div>
      <MarqueeBar />
      <Container>
        <div className="contact_us_in">
          <h1 className="main_heading ">
            Frequently Asking <span>Question</span>
          </h1>
          <Accordion
            defaultActiveKey={["0"]}
            alwaysOpen
            className="faq_accordion"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. How Can I Build More Lean Muscle?</Accordion.Header>
              <Accordion.Body>
                Ultrices eros in cursus turpis massa tincidunt. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Ut etiam sit amet nisl purus in mollis nunc. Ultrices tincidunt arcu non sodales. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2. Can I make payments on a monthly basis?</Accordion.Header>
              <Accordion.Body>
                Euismod in pellentesquvee ultrices eros in cursus turpis massa tincidunt. Augue interdum lit massa placerat duis ultricies. Ut etiam sit amet nisl purus in mollis nunc. Ultrices tincidunt arcu non sodales.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>3. Do I have to pay anything if I break my contract?</Accordion.Header>
              <Accordion.Body>
                Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Ultrices eros in cursus turpis massa tincidunt. Ut etiam sit amet nisl purus in mollis nunc. Ultrices tincidunt arcu non sodales.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default FaqPage;
