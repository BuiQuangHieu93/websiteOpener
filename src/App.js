import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Function to open the website
    const openWebsite = () => {
      window.open(
        "https://login.wifidwn.vn/login?dst=&username=T-48%3A89%3AE7%3AE4%3A18%3AB2",
        "_blank"
      );
    };

    // Set interval to open the website every 15 minutes (900000 milliseconds)
    const intervalId = setInterval(openWebsite, 900000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Website Opener</h1>
      <p>This website will open https://www.youtube.com/ every 15 minutes.</p>
    </div>
  );
}

export default App;
