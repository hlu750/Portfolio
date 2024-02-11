import { FunctionComponent } from "react";
import { Card, CardHeader, CardBody, Divider, Input, Button } from "@nextui-org/react";

const Contact: FunctionComponent = () => {
  return (
    <section className="w-full h-screen pt-8 flex items-center" data-scroll-to="contactSection">
      {/* Left half with text and cards */}
      <div className="w-1/2 h-full p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante et erat consectetur gravida. Sed auctor viverra est, ac porttitor elit.
        </p>
        <div className="gap-4 flex flex-col items-center justify-center">
          {/* Card 1 */}
          <Card>
            <CardBody>
                <p>Card details</p>
            </CardBody>
            <CardHeader>Contact Option 1</CardHeader>
          </Card>

          {/* Card 2 */}
          <Card>
            <CardHeader>Contact Option 2</CardHeader>
            <Divider />
            <CardBody>
              {/* Add contact details here */}
            </CardBody>
          </Card>

          {/* Card 3 */}
          <Card>
            <CardHeader>Contact Option 3</CardHeader>
            <Divider />
            <CardBody>
              {/* Add contact details here */}
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Right half with form */}
      <div className="w-1/2 h-screen bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <Input id="name" name="name" placeholder="Your name" />
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Input id="email" name="email" type="email" placeholder="Your email" />
          </div>

          <div className="mb-4">
            <label htmlFor="message">Message</label>
            <Input id="message" name="message" type="textarea" placeholder="Your message" />
          </div>

          <Button color="primary" variant="shadow">Send</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
