import ContactForm from "./ContactForm"
import ContactLocation from "./ContactLocation"
import ContactUsCard from "./ContactUsCard"

const ContactUs = () => {
  return (
    <div>
        <div>
            <div>
                <div className="text-center p-10 mt-16 mb-16">
                    <h1 className="font-light uppercase p-6">GET TO KNOW US</h1>
                    <h1 className="text-6xl font-bold">Have a project in mind?<br></br>Let's talk.</h1>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <ContactUsCard />
                <ContactUsCard />
                <ContactUsCard />
            </div>
            <div>
                <ContactForm/>
            </div>
            <div className="bg-white p-6">
                <h1 className="font-semibold mb-6 mt-6 ml-20">LOCATIONS</h1>
                <h1 className="text-4xl font-bold ml-20">Come and visit our offices<br></br> around the world</h1>
                <ContactLocation />
                <ContactLocation />
                <ContactLocation />
            </div>
        </div>
    </div>
  )
}

export default ContactUs