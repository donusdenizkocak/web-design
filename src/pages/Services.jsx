import React from "react";

const Services = () => {
  return (
    <div>
      <section>
        <div className="section-left">
          <p>Subscribe To Our Newsletter</p>
        </div>
        <div className="section-right">
          <input
            className="section-input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email..."
          />
          <input
            className="section-input"
            type="submit"
            id="submit"
            defaultValue="Subscribe"
          />
        </div>
      </section>
      <main>
        <div className="servicesmain">
          <div className="services">
            <h4>Services</h4>
            <div className="services-design">
              <h4>Website Design</h4>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, debitis!
              </p>
              <p>Pricing : $1,000-3,000</p>
            </div>
            <div className="services-design">
              <h4>Website Maintenance</h4>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, debitis!
              </p>
              <p>Pricing : $250 per month</p>
            </div>
            <div className="services-design">
              <h4>Website Hosting</h4>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, debitis!
              </p>
              <p>Pricing : $25 per month</p>
            </div>
          </div>
          <div className="get-quote">
            <h4>Get AQuote </h4>
  
            <form action="#" >
              <label htmlFor="name">Name</label>
              <br />
              <input type="text" name="name" id="name" placeholder="Name" />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <br />
              <label htmlFor="massage">Massage</label>
              <br />
              <textarea
                name="textarea"
                id="textarea"
                cols={54}
                rows={2}
                placeholder="Message"
                defaultValue={""}
              />
              <br />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;