import ArticlesCards from "../../src/components/ArticlesCards";
import HeroCards from "../../src/components/HeroCards";
import ServicesCards from "../../src/components/ServicesCards";
import "./home.css";

function HomePages() {
  return (
  <>
      <header>
       <div className="container navbar">
         <a href="/" className="logo">Cleaning X</a>
         <ul className="nav-items">
           <li><a href="/">Home</a></li>
           <li><a href="/about">About</a></li>
           <li><a href="/services">Services</a></li>
           <li><a href="/articles">Articles</a></li>
           <li><a href="/contact">Contact</a></li>
         </ul>
        <button className="btn">Get a free quote</button>
       </div>
     </header>

    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Quality cleaning <br /> for your home</h1>
              <p>
                 Condimentum mauris sit cursus amet id non neque pharetra <br /> nulla ornare sed facilisis senectus dapibus nibh ultrices eget <br /> suscipit aliquet et nulla magna lacus penatibus.
              </p>
             <div className="action-row">
               <button className="btn">Get a free quote</button>
               <p className="contact-number">(414) 567 - 2109</p>
             </div>
           </div>
         <div className="hero-image">
          <img src="./home-png.png" alt="Person cleaning home" />
         </div>
        </div>
        </div>
      </section>

  <section id="about">
     <div className="container about-us">
        <div className="about-text">
          <h2>About Us</h2>
         <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br/> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        </div>


        <div className="about-cards-grid">
          <HeroCards url= {"./about1.png"} title= {"1. Schedule online"} title2= {"Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."}/>
          <HeroCards url= {"./about2.png"} title= {"2. Pay online easily"} title2= {"Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc."}/>
          <HeroCards url= {"./about3.png"} title= {"3. Get your house cleaned"} title2= {"Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend."}/>
        </div>

        <div className="about-btns">
          <button className="btns1">Get a free quote</button>
          <button className="btns2">Explore services</button>
        </div>
     </div>
  </section>


   <section id="services-cards">
      <div className="container services-card">
          <div className="services-texts">
             <h1>Our Services</h1>
             <button>Explore services</button>
          </div>

          <div className="services-comp">
            <ServicesCards url= {"/services1.png"} title= {"House cleaning"} p= {"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."}/>
            <ServicesCards url= {"/services2.png"} title= {"Office cleaning"} p= {"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."}/>
            <ServicesCards url= {"/services3.png"} title= {"Industrial cleaning"} p= {"Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est."}/>
          </div>
      </div>
   </section>


    <section id="covid-card">
      <div className="container covid-cards">
         <div className="card">
           <img src="./cards.png" alt="" />
         </div>
            <div className="covid-texts">
              <p>Covid-19 sanitization</p>
              <h1>We follow guidelines <br/> to keep you safe from <br/> the COVID-19 virus</h1>
              <h3>Lobortis mattis odio leo eget mauris met aliquet <br/> semper molestie sollicitudin congue massa <br/> mauris lectus.</h3>

              <div className="covid-btns">
                 <button className="covidbtns1">Get a free quote</button>
                 <p className="covidbtns2">(414) 567 - 2109</p>
              </div>
            </div>
      </div>
    </section>


     <section id="articles-cards">
        <div className="container articles-card">
           <div className="article-texts">
               <h1>Articles & resources</h1>

               <div className="article-btns">
                   <button className="articlebtns1">Get a free quote</button>
                   <button className="articlebtns2">Browse articles</button>
               </div>
           </div>

           <div className="artic-cards">
              <ArticlesCards url= {"/articles1.png"} h2= {"8 best vacuum cleaners to clean any mess for your home in 2022"} b= {"Jan 28, 2022"}/>
              <ArticlesCards url= {"/articles2.png"} h2= {"How to properly disinfect your phone and other electronics"} b= {"Feb 1, 2022"}/>
           </div>
        </div>
     </section>


      <section id="contacts">
         <div className="container contact-us">
           <div className="contact-user">
             <h1>Contact Us</h1>
             <p>In dignissim euismod pretium amet enim a eu nam <br/> ut urna accumsan pellentesque lacus duis pharetra <br/> eutortor.</p>
             <h2>(414) 567 - 2109</h2>
             <h3>Not convinced yet?</h3>
             <h4>Massa bibendum consectetur maurisid gravida <br/> purus, dolor dui amet morbi non nunc urna <br/> purus diam.</h4>
             <button>Browse our packages</button>
           </div>

       <div className="forms">
        <form>
          <div className="row">
           <div className="form-group">
             <label>Full name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input type="tel" required />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Address</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Requested service</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Day of service</label>
            <input type="date" required />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Add a note</label>
          <textarea rows="5" placeholder="Write your messages..."></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit message</button>
      </form>
    </div>
 </div>
      </section>
   </main>


   <footer id="footers-cards">
      <div className="container footer-card">
        <div className="footer">
          <div className="footers">
           <h1>Quality cleaning for <br/> your home</h1>
           <p>Lorem ipsum dolor sit amet cteturdo <br/> adipiscing elit, sed do eiusmo.</p>
         </div>

        <div className="footers-text">
          <h1>Contact us.</h1>
          <ul>
            <li>
              <a href="">
1827 Nickel Road, Los Angeles, <br/> CA, 90017, United States</a>
            </li>
            <li>
              <a href="">(414) 567 - 2109</a>
            </li>
            <li>
              <a href="">contact@cleaning.com</a>
            </li>
          </ul>
        </div>

        <div className="footers-text">
          <h1>Hours</h1>
          <ul>
            <li>
              <a href="">Monday to Friday</a>
            </li>
            <li>
              <a href="">6:00 AM - 9:00 PM</a>
            </li>
            <li>
              <a href="">8:00 AM - 8:00 PM</a>
            </li>
          </ul>
        </div>

        <div className="footers-text">
          <h1>Get a free estimate</h1>
          <ul>
            <li>
              <a href="">(414) 567 - 2109</a>
            </li>
            <li>
              <a href="">Lorem ipsum dolor sit amet ectetur <br/> adipiscing elit, sed do eiusmod.</a>
            </li>
          </ul>
          <button>Request a free quote</button>
        </div>
        </div>
      </div>
   </footer>

</>
  );
}

export default HomePages;
