import React from 'react'

const footer = ()=>{
    return(
        <footer>
         <div class="container">
            <div class="footermain">
               <div class="row">
                  <div class="col">
                     <div class="retailers">
                        <a href="liquorstore-signup.html" class="btn btn-white">For Retailers</a>   
                     </div>
                  </div>
                  <div class="col">
                     <div class="newsletter">
                        <h4>Don't miss out</h4>
                        <p>Sign up to get special offers & invites via email.</p>
                        <form class="newsletterform">
                           <input type="text" name="newsletter" placeholder="Email Address" />
                           <button type="button" class="btn btn-white">
                              <img src="img/sendbtn.png" alt="Paper Plane"/>
                              {/* <svg width="24px" height="23px" viewBox="0 0 24 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Group 3</title> <desc>Created with Sketch.</desc> <defs> <polygon id="path-1" points="0 0 24 0 24 23 0 23"></polygon> </defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="footer" transform="translate(-605.000000, -171.000000)"> <g id="Group-15" transform="translate(384.000000, 61.000000)"> <g id="2"> <g id="Group-11" transform="translate(0.000000, 95.000000)"> <g id="input-field"> <g id="Group-3" transform="translate(221.000000, 15.000000)"> <mask id="mask-2" fill="white"> <use xlink:href="#path-1"></use> </mask> <g id="Clip-2"></g> <path d="M16.8518637,19.9037826 L8.54168582,14.8928602 L22.7778411,1.74539402 L16.8518637,19.9037826 Z M7.62748376,14.6378546 C7.5916713,14.6694728 7.56049946,14.7086093 7.53612449,14.7546463 C7.532937,14.7606713 7.529937,14.7666963 7.52703075,14.7728242 C7.50378078,14.8222084 7.4902808,14.8744248 7.48582768,14.9266412 L6.95459392,19.9245868 L5.77770466,13.6052156 L18.6732365,4.43685692 L7.62748376,14.6378546 Z M1.27649115,10.4037415 L20.2670316,2.30139075 L5.33637705,12.916618 L1.27649115,10.4037415 Z M23.8842773,0.119424157 C23.77684,0.00443474455 23.6181214,-0.031148634 23.4784341,0.0285861259 L0.244351726,9.94141504 C0.106258137,10.0003259 0.0115238719,10.141372 0.000977009144,10.3036343 C-0.00956985359,10.4658965 0.0659456836,10.62028 0.194945533,10.700098 L5.00989306,13.680399 L6.68103174,22.6539504 C6.69143798,22.7174443 6.71492232,22.7765096 6.74862541,22.8272327 C6.7520004,22.8323307 6.75476603,22.8361929 6.75757852,22.8401065 C6.81645345,22.9210574 6.89993773,22.9774965 6.99725012,22.994593 C7.00967198,22.9967558 7.02214072,22.9983521 7.0345157,22.9991246 C7.04253132,22.9997425 7.05050006,23 7.0584688,23 C7.13154684,23 7.20078113,22.9770845 7.25979669,22.9367121 C7.27976542,22.9231687 7.29874977,22.9074626 7.31637475,22.8895937 C7.32185912,22.8840837 7.32664036,22.8790371 7.33128098,22.8738876 L10.9557924,18.8819063 C11.105136,18.7174297 11.1048547,18.4509921 10.9550893,18.2869274 C10.8051832,18.1227598 10.5628397,18.1231718 10.4134493,18.2876999 L7.56631196,21.4234658 L8.18149874,15.6356825 L16.8765668,20.8786436 C16.964176,20.931169 17.0614415,20.9424465 17.1505977,20.9188101 C17.1603945,20.9161838 17.1693477,20.9133515 17.178207,20.9102618 C17.2662382,20.8789011 17.3434881,20.8136048 17.392613,20.719883 C17.3950974,20.7150424 17.3973005,20.7106653 17.3995036,20.7062882 C17.4094411,20.685484 17.417363,20.6650918 17.4236911,20.6443906 L23.9775585,0.562748767 C24.0280897,0.407644374 23.9917147,0.234310579 23.8842773,0.119424157 L23.8842773,0.119424157 Z" id="Fill-1" fill="#A72B2A" mask="url(#mask-2)"></path> </g> </g> </g> </g> </g> </g> </g> </svg> */}
                           </button>
                        </form>
                     </div>
                  </div>
                  <div class="col">
                     <h4>Follow Us:</h4>
                     <div class="socialfooter">
                        <a href="https://www.facebook.com/getbevvi/" target="_blank"><span class="icon fab fa-facebook-f"></span></a>
                        <a href="https://twitter.com/getbevvi" target="_blank"><span class="icon fab fa-twitter"></span></a>
                        <a href="https://www.linkedin.com/company/etail-inc/" target="_blank"><span class="icon fab fa-linkedin-in"></span></a>
                        <a href="https://www.instagram.com/getbevvi/" target="_blank"><span class="icon fab fa-instagram"></span></a>
                     </div>
                  </div>
                  <div class="col">
                     <div class="downloadapp">
                        <h4>Download the App</h4>
                        <a href="https://itunes.apple.com/us/app/bevvi-alcohol-tracker/id1309066556?mt=8" class="btn btn-line block" target="_blank">
                           <img src="img/appstore-icon.png" alt="App Store"/>
                           {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="20px" height="25px" viewBox="0 0 20 25" enable-background="new 0 0 20 25" xml:space="preserve"> <g> <defs> <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0.18" y="6.254" width="19.638" height="18.305"> <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/> </filter> </defs> <path fill="#FFFFFF" d="M16.583,13.256c-0.028-3.054,2.492-4.52,2.604-4.594c-1.418-2.072-3.625-2.356-4.412-2.389 c-1.877-0.19-3.664,1.106-4.616,1.106c-0.951,0-2.422-1.078-3.979-1.05C4.132,6.359,2.245,7.52,1.19,9.354 c-2.127,3.689-0.544,9.158,1.529,12.152c1.013,1.463,2.221,3.111,3.806,3.051c1.528-0.061,2.104-0.988,3.952-0.988 c1.847,0,2.365,0.988,3.981,0.957c1.644-0.028,2.685-1.491,3.688-2.961c1.164-1.701,1.644-3.348,1.672-3.432 C19.783,18.117,16.616,16.902,16.583,13.256z"/> <defs> <filter id="Adobe_OpacityMaskFilter_1_" filterUnits="userSpaceOnUse" x="9.939" y="0.441" width="4.889" height="5.567"> <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/> </filter> </defs> <g mask="url(#mask1)"> <path fill="#FFFFFF" d="M13.547,4.292c0.842-1.021,1.41-2.439,1.256-3.851c-1.214,0.049-2.683,0.806-3.554,1.826 c-0.78,0.905-1.462,2.345-1.28,3.731C11.322,6.104,12.703,5.311,13.547,4.292z"/> </g> </svg> */}
                           App Store
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.app.bevvi&hl=el" class="btn btn-line block" target="_blank">
                            <img src="img/playstore-icon.png" alt="Play Store"/> 
                           {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="22px" height="22px" viewBox="0 0 22 22" enable-background="new 0 0 22 22" xml:space="preserve"> <g> <path fill="#FFFFFF" d="M0.835,1.117c-0.073,0.165-0.082,0.358-0.082,0.58v17.796c0,0.207,0.009,0.399,0.082,0.563l10.624-9.456 L0.835,1.117z"/> <path fill="#FFFFFF" d="M15.576,7.298L3.007,0.616C2.5,0.302,2.009,0.231,1.577,0.345l10.827,9.832L15.576,7.298z"/> <defs> <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="13.216" y="7.736" width="8.031" height="6.542"> <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/> </filter> </defs> <path fill="#FFFFFF" d="M20.259,9.59l-3.468-1.854l-3.575,3.249l3.621,3.292l3.375-1.778C21.876,11.605,21.262,10.138,20.259,9.59z"/> <path fill="#FFFFFF" d="M1.577,21.643c0.444,0.143,0.948,0.041,1.452-0.244l12.547-6.621l-3.229-2.953L1.577,21.643z"/> </g>  */}
                           {/* </svg> */}
                           Play Store
                        </a>
                     </div>
                  </div>
                  <div class="col">
                     <div class="footerlinks">
                        <h4>Quick Links</h4>
                        <a href="help.html">HELP</a>
                        <a href="termsofuse.html">TERMS OF USE</a>
                        <a href="privacy-policy.html">PRIVACY POLICY</a>
                        <a href="tel:+15518007821">CALL US</a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="footerbottom">
               <div class="row">
                  <div class="col">
                     <copyright>&copy; 2019 ETAIL INC. All Rights Reserved.</copyright>
                     <p class="block">Made with &#10084; in NYC</p>
                  </div>
                  <div class="col text-right">
                     <a href="index.html">
                        <img src="img/footerlogo.svg" alt="Bevvi Logo" /> 
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    );
}

export default footer;