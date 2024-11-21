const About = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center underline py-12">
        About Us
      </h2>
      <div className="text-center">
        <h4 className="text-lg font-bold">hi, my name is sajeeb, </h4>
        <p className="text-sm text-slate-500">
          Welcome to our platform, where technology meets convenience to enhance
          your travel experiences. Our mission is to provide a seamless and
          engaging space for travel enthusiasts and savvy shoppers alike.
        </p>
      </div>
      <div className="divider"></div>
      <div className="space-y-4 py-12">
        <span>Our platform specializes in three core areas:</span>
        <ul className="space-y-6" >
          <li>
            <h2 className="text-lg font-bold">Travel Insights and Exploration:</h2>
            <p>
              Discover destinations, plan trips, and get insider tips to make
              your journeys unforgettable. We aim to inspire wanderlust and
              provide all the tools you need to explore the world with ease.
            </p>
          </li>
          <li>
            <h2 className="text-lg font-bold">Coupon Collection:</h2>
            <p>
              Save more while traveling or shopping! We bring you a curated
              collection of coupons and deals from trusted sources, helping you
              make the most of your adventures without stretching your budget.
            </p>
          </li>
          <li>
            <h2 className="text-lg font-bold">Form Authentication:</h2>
            <p>
              Your security is our priority. We’ve integrated advanced
              authentication methods to ensure your data and transactions are
              always safe. Enjoy peace of mind knowing your personal information
              is protected at every step.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
