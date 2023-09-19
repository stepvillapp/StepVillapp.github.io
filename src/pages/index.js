
import * as React from "react"
import defaultImageSrc from '../images/headerimage.png'; // Import the default image
import iPhoneImageSrc from '../images/black.png'; // Import the default image
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {

  // const backgroundImageStyle = {
  //   // backgroundImage: `linear-gradient(${'rgba(0, 0, 0, 0)'},${'rgba(0, 0, 0, 0)'}), url(${defaultImageSrc})`,
  //   backgroundImage: `url(${defaultImageSrc})`,
  //   backgroundColor: '#f0f0f0', // Set a fixed background color (light gray in this example)

  // };
  const backgroundImageStyle = {
    backgroundImage: `url(${defaultImageSrc})`,
    backgroundColor: '#f0f0f0', // Set a fixed background color (light gray in this example)
    height: '115px', // Apply height directly
    /* Add any other styles you want to apply directly here */
  };

  const headerIconStyle = {
    width: '50px',
    height: '50px',
    WebkitClipPath: 'url(#shape)',
    clipPath: 'url(#shape)',
    marginRight: '15px',
  };

  const appIconLargeStyle = {
    width: '120px',
    height: '120px',
    WebkitClipPath: 'url(#shape120)',
    clipPath: 'url(#shape120)',
  };

  const appStoreStyle = {
    width: '220px',
    height: '75px',

  };




  // You can then use the `appIconLargeStyle` object in your components or styles as needed.



  const containerStyles = {
    display: 'grid',
    margin: 'auto',
    maxWidth: '1170px', // Replace with your desired max-width
    paddingLeft: '15px',
    paddingRight: '15px',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: '115px 876px auto auto',
    gridColumnGap: '30px',
    gridTemplateAreas: `
      "h h h h h h h h h h h h"
      "p p p p p i i i i i i i"
      "c c c c c c c c c c c c"
      "f f f f f f f f f f f f"
    `,
  };



  //   <StaticImage
  //   alt="Irene"
  //      src="../images/black.png"
  //  />


  return (
    <Layout>

      {/* <div className="imageWrapper" style={backgroundImageStyle}> */}

      <div
      className="imageWrapper"
      style={{
        backgroundImage: `linear-gradient(${"rgba(184, 204, 197, 0.5)"},${
          "rgba(184, 204, 197, 0.5)"
        }),url(${defaultImageSrc})`,
      }}
    >


      <div className="headerBackground"> 
      {/* last gray */}
        <div className="container" style={containerStyles}>


          <header>
            <div className="logo">
              <div className="appIconShadow">
                <svg width="0" height="0">
                  <defs>
                    <clipPath id="shape">
                      <path
                        id="shape"
                        d="M6181.23,233.709v-1.792c0-.5-0.02-1-0.02-1.523a24.257,24.257,0,0,0-.28-3.3,11.207,11.207,0,0,0-1.04-3.132,10.683,10.683,0,0,0-1.95-2.679,10.384,10.384,0,0,0-2.68-1.943,10.806,10.806,0,0,0-3.13-1.038,19.588,19.588,0,0,0-3.3-.285c-0.5-.017-1-0.017-1.52-0.017h-22.39c-0.51,0-1.01.017-1.53,0.017a24.041,24.041,0,0,0-3.3.285,11.009,11.009,0,0,0-3.13,1.038,10.491,10.491,0,0,0-4.62,4.622,10.893,10.893,0,0,0-1.04,3.132,19.2,19.2,0,0,0-.28,3.3c-0.02.5-.02,1-0.02,1.523v22.392c0,0.5.02,1,.02,1.524a24.257,24.257,0,0,0,.28,3.3,10.9,10.9,0,0,0,1.04,3.132,10.491,10.491,0,0,0,4.62,4.622,11.04,11.04,0,0,0,3.13,1.038,19.891,19.891,0,0,0,3.3.285c0.51,0.017,1.01.017,1.53,0.017h22.39c0.5,0,1-.017,1.52-0.017a24.221,24.221,0,0,0,3.3-.285,10.836,10.836,0,0,0,3.13-1.038,10.408,10.408,0,0,0,2.68-1.943,10.683,10.683,0,0,0,1.95-2.679,11.217,11.217,0,0,0,1.04-3.132,20.257,20.257,0,0,0,.28-3.3c0.02-.5.02-1,0.02-1.524v-20.6h0Z"
                        transform="translate(-6131 -218)"
                      />
                    </clipPath>
                  </defs>
                </svg>




                <StaticImage
                  src="../images/icon.png" // Replace with the actual path to your image
                  alt="Header Icon"
                  className="headerIcon"
                  style={headerIconStyle} // Apply the style here
                />







              </div>
              <p className="headerName">{"StepVillapp"}</p>
            </div>
            <nav>
              <ul>

                <li>
                  <a href="https://docs.google.com/document/d/1e_yvanlOv7u3wWBMzPa6ktNm5cDkmlpI5VK78PkaXUg/edit">Privacy Policy</a>
                </li>

              </ul>
            </nav>

          </header>

          <div
            className="iphonePreview"
            style={{
              backgroundImage: `url(${iPhoneImageSrc})`,
            }}
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 0 0"
              style={{ position: "absolute" }}
            >
              <clipPath
                id="screenMask"
                clipPathUnits="objectBoundingBox"
                transform="scale(.00257 .00119)"
              >

                <path
                  d="M6490.24,1234.36H6216.28c-2.57,0-10.55-.07-12.07-0.07a87.524,87.524,0,0,1-12-1.03,40.051,40.051,0,0,1-11.4-3.79,38.315,38.315,0,0,1-16.82-16.84,39.948,39.948,0,0,1-3.78-11.42,72.257,72.257,0,0,1-1.04-12.02c-0.06-1.83-.06-5.56-0.06-5.56V452.125h0s0.06-11.391.06-12.086a87.9,87.9,0,0,1,1.04-12.025,39.843,39.843,0,0,1,3.78-11.413,38.283,38.283,0,0,1,16.82-16.847,39.762,39.762,0,0,1,11.4-3.785,71.909,71.909,0,0,1,12-1.037c16.99-.567,36.32-0.061,34.51-0.061,5.02,0,6.5,3.439,6.63,6.962a35.611,35.611,0,0,0,1.2,8.156,21.326,21.326,0,0,0,19.18,15.592c2.28,0.192,6.78.355,6.78,0.355H6433.7s4.5-.059,6.79-0.251a21.348,21.348,0,0,0,19.18-15.591,35.582,35.582,0,0,0,1.19-8.154c0.13-3.523,1.61-6.962,6.64-6.962-1.81,0,17.52-.5,34.5.061a71.923,71.923,0,0,1,12.01,1.038,39.832,39.832,0,0,1,11.4,3.784,38.283,38.283,0,0,1,16.82,16.844,40.153,40.153,0,0,1,3.78,11.413,87.844,87.844,0,0,1,1.03,12.023c0,0.695.06,12.084,0.06,12.084h0V1183.64s0,3.72-.06,5.55a72.366,72.366,0,0,1-1.03,12.03,40.2,40.2,0,0,1-3.78,11.41,38.315,38.315,0,0,1-16.82,16.84,40.155,40.155,0,0,1-11.4,3.79,87.669,87.669,0,0,1-12.01,1.03c-1.52,0-9.5.07-12.07,0.07"
                  transform="translate(-6159.12 -394.656)"
                />

              </clipPath>
            </svg>
          </div>

          <div className="appInfo">

            <div className="appIconShadow">
              <svg width="0" height="0">
                <defs>
                  <clipPath id="shape120">
                    <path
                      id="shape"
                      d="M6821,495.533v-4.281c0-1.2-.04-2.4-0.04-3.642a57.7,57.7,0,0,0-.68-7.882,26.144,26.144,0,0,0-2.48-7.483,25.115,25.115,0,0,0-11.04-11.044,26.118,26.118,0,0,0-7.49-2.481,47.28,47.28,0,0,0-7.88-.68c-1.2-.04-2.4-0.04-3.64-0.04h-53.5c-1.2,0-2.4.04-3.64,0.04a57.813,57.813,0,0,0-7.88.68,26.323,26.323,0,0,0-7.49,2.481,25.115,25.115,0,0,0-11.04,11.044,26.144,26.144,0,0,0-2.48,7.483,47.313,47.313,0,0,0-.68,7.882c-0.04,1.2-.04,2.4-0.04,3.642v53.5c0,1.2.04,2.4,0.04,3.641a57.7,57.7,0,0,0,.68,7.883,26.137,26.137,0,0,0,2.48,7.482,25.115,25.115,0,0,0,11.04,11.044,26.261,26.261,0,0,0,7.49,2.481,47.28,47.28,0,0,0,7.88.68c1.2,0.04,2.4.04,3.64,0.04h53.5c1.2,0,2.4-.04,3.64-0.04a57.654,57.654,0,0,0,7.88-.68,26.057,26.057,0,0,0,7.49-2.481,25.115,25.115,0,0,0,11.04-11.044,26.137,26.137,0,0,0,2.48-7.482,47.316,47.316,0,0,0,.68-7.883c0.04-1.2.04-2.4,0.04-3.641V495.533h0Z"
                      transform="translate(-6701 -458)"
                      filter="url(#f1)"
                    />
                  </clipPath>
                </defs>
              </svg>


              <StaticImage
                src="../images/icon.png" // Replace with the actual path to your image
                alt="appIconLarge"
                className="appIconLarge"
                style={appIconLargeStyle} // Apply the style here
              />


            </div>
            <div className="appNamePriceContainer">
              <h1 className="appName">{"StepVillapp"}</h1>
              {/* <h2 className="appPrice">{configs.app_price}</h2> */}
            </div>
            <div className="appDescriptionContainer">
              <p className="appDescription">{"A magic world powered by your steps"}</p>
            </div>
            <div className="downloadButtonsContainer">


              <a className="appStoreLink" href="https://docs.google.com/document/d/1fT9geooeYns8GMdkfHT3BN3TfJnftHg62T25Dk6FmqI/edit?usp=sharing">


                <StaticImage
                  src="../images/appstore.png" // Replace with the actual path to your image
                  alt="appstore"
                  className="appStore"
                  style={appStoreStyle} // Apply the style here
                />


              </a>

            </div>

          </div>

        </div>
      </div>
      </div>
    </Layout>
  )
}



export default HomePage
