import React from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'

function NavBar() {
  return (
    <nav id="nav1">
      <a href="#about">About us</a>
      <a href="#warm">Color searching</a>
      <a href="#save">Your saved colors</a>
      <a href="#contact">Contact us</a>
    </nav>
  );
}

function Homepage() {
  return (
    <section id="about">
      <h2>About Us</h2>
      <p>Welcome to the Lipstick Color Name Directory! </p>
      <p>This website helps you find the perfect lipstick color for any occasion. Lipstick can totally change your look and make you feel amazing. 
          The website has lots of different lipstick colors from all kinds of brands, so you can find one that suits your style.
          The name of a lipstick color is really important. 
          It's not just a color - it shows your personality and how you're feeling. 
          Whether you want a bright red for a night out, a subtle nude for everyday wear, or a fun color to make a statement, 
          you can find what you need here. The goal of this website is to make it easy for you to find the perfect lipstick color. 
          There is a big list of colors with pictures, descriptions and brands as well as their prices, so you can see exactly what they look like 
          and where you can buy them with budget prices. 
          Whether you're a makeup pro or just starting out, this website is easy to use and has everything you need.
          We also want to create a friendly community where people can talk about makeup and share tips.
          Everyone is welcome, and we celebrate all kinds of beauty. </p>
      <p>Join us on this fun journey to find the perfect lipstick color for you. Thanks for choosing Lipstick Color Name Directory!</p>
    </section>
  );
}

function WarmColor() {
  return (
    <section id="warm">
      <h2>Yellow - Based (Warm)</h2>
      <div class="lipstick">
            <div class="color" id="cocoa"></div>
            <h3>Cocoa</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="mojave"></div>
            <h3>Mojave</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="nutmeg"></div>
            <h3>Nutmeg</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="persimmon"></div>
            <h3>Persimmon</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="moca"></div>
            <h3>Moca</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="fly_girl"></div>
            <h3>Fly Girl</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="redwood"></div>
            <h3>Redwood</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="red_cherry"></div>
            <h3>Red Cherry</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="brick"></div>
            <h3>Brick</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="burnt_orange"></div>
            <h3>Burnt Orange</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="coral_reef"></div>
            <h3>Coral Reef</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="coral"></div>
            <h3>Coral</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="coral_ice"></div>
            <h3>Coral Ice</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="caramel_latte"></div>
            <h3>Caramel Latte</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="spice_ice"></div>
            <h3>Spice Ice</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="plum_pretty"></div>
            <h3>Plum Pretty</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="peach"></div>
            <h3>Peach</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="gold_champagne"></div>
            <h3>Gold Champagne</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="precious_topaz"></div>
            <h3>Precious Topaz</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="dawn_rising"></div>
            <h3>Dawn Rising</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="beige_champagne"></div>
            <h3>Beige Champagne</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="cappuccino"></div>
            <h3>Cappuccino</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="shelala"></div>
            <h3>Shelala</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="samon"></div>
            <h3>Samon</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="honey_rose"></div>
            <h3>Honey Rose</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="summer_sunset"></div>
            <h3>Summer Sunset</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="heartbreaker"></div>
            <h3>Heartbreaker</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="apple_cider"></div>
            <h3>Apple Cider</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="luv_it"></div>
            <h3>Luv It</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="kiss_me_katie"></div>
            <h3>Kiss Me Katie</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="bombshell"></div>
            <h3>Bombshell</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="bravo"></div>
            <h3>Bravo</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="bronze_shimmer"></div>
            <h3>Bronze Shimmer</h3>
        </div>
    </section>
  );
}

function NeutralColor() {
    return (
        <section id="neutral1">
        <h2>Neutral</h2>
        <div class="lipstick">
            <div class="color" id="nude"></div>
            <h3>Nude</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="first_love"></div>
            <h3>First Love</h3>
        </div>
    </section>  
    );
}

function CoolColor() {
    return (
        <section id="cool">
        <h2>Blue - Based (Cool)</h2>
        <div class="lipstick">
            <div class="color" id="blackberry"></div>
            <h3>Blackberry</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="raisin"></div>
            <h3>Raisin</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="sheer_berry"></div>
            <h3>Sheer Berry</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="dusty_rose"></div>
            <h3>Dusty Rose</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="mulled_wine"></div>
            <h3>Mulled Wine</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="napa"></div>
            <h3>Napa</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="plum"></div>
            <h3>Plum</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="currant"></div>
            <h3>Currant</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="berry"></div>
            <h3>Berry</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="purple_reign"></div>
            <h3>Purple Reign</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="lexie_bear_y"></div>
            <h3>Lexie Bear-y</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="neutral"></div>
            <h3>Neutral</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="b_ruby"></div>
            <h3>B. Ruby</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="roseberry"></div>
            <h3>Roseberry</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="dark_pink"></div>
            <h3>Dark Pink</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="crimson_red"></div>
            <h3>Crimson Red</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="blu_red"></div>
            <h3>Blu - Red</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="cranberry"></div>
            <h3>Cranberry</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="pomegranate"></div>
            <h3>Pomegranate</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="strawberry_shortcake"></div>
            <h3>Strawberry Shortcake</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="rhubarb"></div>
            <h3>Rhubarb</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="kiss_for_a_cause"></div>
            <h3>Kiss For A Cause</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="fuscia"></div>
            <h3>Fuscia</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="plumeria"></div>
            <h3>Plumeria</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="kathy_kisses"></div>
            <h3>Kathy's Kisses</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="party_pink"></div>
            <h3>Party Pink</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="pink_ice"></div>
            <h3>Pink Ice</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="sheer_pink"></div>
            <h3>Sheer Pink</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="fire_ice"></div>
            <h3>Fire 'n Ice</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="caramel_apple"></div>
            <h3>Caramel Apple</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="rose_ice"></div>
            <h3>Rose Ice</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="fleur_de_lisa"></div>
            <h3>Fleur De Lisa</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="aussie_rose"></div>
            <h3>Aussie Rose</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="army_pink"></div>
            <h3>Army Pink</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="mauve_ice"></div>
            <h3>Mauve Ice</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="kelly_krush"></div>
            <h3>Kelly's Krush</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="praline_rose"></div>
            <h3>Praline Rose</h3>
        </div>
        <div class="lipstick">
            <div class="color" id="pink_champagne"></div>
            <h3>Pink Champagne</h3>
        </div>
    </section> 
    );
}
function Contact() {
  return (
    <section id="contact">
        <div class="contact1"><img src ="images/contact_us.png" class="img-responsive" ></img>
        </div>
        <div class="contact1" id ="contactid1">
        <p>Contact Us</p>
        <p>Contact Us</p><p>Contact Us</p><p>Contact Us</p>
        </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <header>
        <img src="images/background4.png" alt="background" className="img-responsive" style={{ width: '100%' }} />
      </header>
      <NavBar />
      <Homepage />
      <WarmColor />
      <NeutralColor />
      <CoolColor />
      <Contact />
    </div>
  );
}

export default App;
