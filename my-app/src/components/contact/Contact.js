import './Contact.css'

const Contact = () => {
    const copytxt=()=>{
        
    }
    return (
        <div className="main-contact">
            <div className="contact-layout">
                <div className="container-upper">
                    <p className='heading-large'>
                         We'd love to hear from you
                    </p>
                    <p className='heading-medium'>
                        Get the info you're looking for right now
                    </p>
                </div>
                <div className="container-below">
                    <div className="contact-grids">
                        <p className="heading-small">
                            Get support
                        </p>
                        <p className='heading-desc'>
                              Need help regarding your account? Mail us to get your issue resolved
                        </p>
                    </div>
                    <div className="contact-grids">
                        <p className="heading-small">
                            FAQ's
                        </p>
                        <p className='heading-desc'>
                            Check frequently asked questions and their solutions
                        </p>
                    </div>
                    <div className="contact-grids" onClick={copytxt()}>
                        <p className="heading-small">
                            Customer support
                        </p>
                        <p className='heading-desc'>
                            Call us at phone no. <span className="cpytxt">1245365245</span>
                        </p>
                    </div>
                    
                </div>
                <div className="container">
                    <h1>Contact Us</h1>
                    <form target="_blank" enctype="multipart/form-data" action="https://formsubmit.co/ec84fe77bdda68d1feb844e17626eaf3" method="post" className='contact-us-form'>
                        <input type="hidden" name="_next" value="http://localhost:3000/"/>
                        <input type="hidden" name="_template" value="table"></input>
                        <label for="fname">Name</label>
                        <input type="text" id="fname" name="name" placeholder="Your name.." required/>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email address.." required/>
                        <label for="lname">Subject</label>
                        <input type="text" id="lname" name="subject" placeholder="Mail Subject.." required/>
                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Write your message.." rows="6" required></textarea>
                        <input type="file" name="attachment" accept="image/png, image/jpeg"></input>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;