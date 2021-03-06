import React from 'react'

const body = () =>{
    return(
        <div>
            <section class="banner align-items-center">
         <div class="container">
            <div class="bannertext">
               <h1>DELIVERING THE<br/>/BEST PRICES ON ALCOHOL</h1>
               <h3>no delivery fees.&nbsp;&nbsp;&nbsp;no membership fees.</h3>
               <div class="bannershop">
                  {/* <!-- <img src="img/map-pin.png" alt="Map Pin"> --> */}
                  {/* <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35009 5.77231C7.37715 5.77231 5.77203 7.37742 5.77203 9.35113C5.77203 11.3248 7.37715 12.93 9.35009 12.93C11.323 12.93 12.9281 11.3248 12.9281 9.35113C12.9281 7.37742 11.323 5.77231 9.35009 5.77231ZM9.35009 13.6939C6.9558 13.6939 5.00732 11.7454 5.00732 9.35037C5.00732 6.95531 6.95503 5.00684 9.35009 5.00684C11.7451 5.00684 13.6929 6.95531 13.6929 9.35037C13.6929 11.7454 11.7444 13.6939 9.35009 13.6939Z" fill="#3F3F3F"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35006 0.764706C4.61576 0.764706 0.764706 4.61653 0.764706 9.35159C0.764706 13.6118 7.81224 22.516 9.35006 24.4071C10.8871 22.5152 17.9354 13.611 17.9354 9.35159C17.9346 4.61653 14.0836 0.764706 9.35006 0.764706ZM9.35006 25.3921C9.23688 25.3921 9.12982 25.3424 9.05718 25.2552C8.68706 24.8139 0 14.3849 0 9.35159C0 4.19518 4.19441 0 9.35006 0C14.5057 0 18.7001 4.19518 18.7001 9.35159C18.7001 14.3856 10.0131 24.8139 9.64371 25.2559C9.57029 25.3424 9.46247 25.3921 9.35006 25.3921Z" fill="#3F3F3F"/> </svg> */}

                  <form class="bannerform">
                     <input type="text" name="address" placeholder="Enter your address to start shopping" />
                     <button type="submit" class="btn btn-secondary">SHOP NOW</button>
                  </form>
               </div>
               <p>now serving New York City</p>
            </div>
         </div>
      </section>

      <section class="afterbanner">
         <div class="container d-flex justify-content-center align-items-center flex-row flex-wrap text-center">
            <span>Shop alcohol on the go, download the Bevvi app</span>
            <a href="https://itunes.apple.com/us/app/bevvi-alcohol-tracker/id1309066556?mt=8" class="btn btn-line" target="_blank">
                <img src="img/appstore-icon.png" alt="App Store" />
               {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="20px" height="25px" viewBox="0 0 20 25" enable-background="new 0 0 20 25" xml:space="preserve"> <g> <defs> <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0.18" y="6.254" width="19.638" height="18.305"> <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/> </filter> </defs> <path fill="#FFFFFF" d="M16.583,13.256c-0.028-3.054,2.492-4.52,2.604-4.594c-1.418-2.072-3.625-2.356-4.412-2.389 c-1.877-0.19-3.664,1.106-4.616,1.106c-0.951,0-2.422-1.078-3.979-1.05C4.132,6.359,2.245,7.52,1.19,9.354 c-2.127,3.689-0.544,9.158,1.529,12.152c1.013,1.463,2.221,3.111,3.806,3.051c1.528-0.061,2.104-0.988,3.952-0.988 c1.847,0,2.365,0.988,3.981,0.957c1.644-0.028,2.685-1.491,3.688-2.961c1.164-1.701,1.644-3.348,1.672-3.432 C19.783,18.117,16.616,16.902,16.583,13.256z"/> <defs> <filter id="Adobe_OpacityMaskFilter_1_" filterUnits="userSpaceOnUse" x="9.939" y="0.441" width="4.889" height="5.567"> <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/> </filter> </defs> <g mask="url(#mask1)"> <path fill="#FFFFFF" d="M13.547,4.292c0.842-1.021,1.41-2.439,1.256-3.851c-1.214,0.049-2.683,0.806-3.554,1.826 c-0.78,0.905-1.462,2.345-1.28,3.731C11.322,6.104,12.703,5.311,13.547,4.292z"/> </g> </svg> */}
               App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.app.bevvi&hl=el" class="btn btn-line" target="_blank">
                <img src="img/playstore-icon.png" alt="Play Store" /> 
               {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="22px" height="22px" viewBox="0 0 22 22" enable-background="new 0 0 22 22" xml:space="preserve"> <g> <path fill="#FFFFFF" d="M0.835,1.117c-0.073,0.165-0.082,0.358-0.082,0.58v17.796c0,0.207,0.009,0.399,0.082,0.563l10.624-9.456 L0.835,1.117z"/> <path fill="#FFFFFF" d="M15.576,7.298L3.007,0.616C2.5,0.302,2.009,0.231,1.577,0.345l10.827,9.832L15.576,7.298z"/> <defs> <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="13.216" y="7.736" width="8.031" height="6.542"> <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/> </filter> </defs> <path fill="#FFFFFF" d="M20.259,9.59l-3.468-1.854l-3.575,3.249l3.621,3.292l3.375-1.778C21.876,11.605,21.262,10.138,20.259,9.59z"/> <path fill="#FFFFFF" d="M1.577,21.643c0.444,0.143,0.948,0.041,1.452-0.244l12.547-6.621l-3.229-2.953L1.577,21.643z"/> </g> </svg> */}
               Play Store
            </a>
         </div>
      </section>

      <section class="howitworks text-center">
         <div class="container">
            <h4 class="brgrmed col-secondary mb-4">FINALLY. ALCOHOL DELIVERY DESIGNED FOR BUSINESSES</h4>
            <h3>HOW DOES IT WORK?</h3>
            <div class="row">
               <div class="col-sm-4">
                  {/* <!-- <img src="img/howitworks1.png" alt="Bevvi How it Works" /> --> */}
                  {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="52px" height="54px" viewBox="0 0 52 54" enable-background="new 0 0 52 54" xml:space="preserve"> <path fill="#A72B2A" d="M23.037,17.524c0-0.266-0.215-0.481-0.481-0.481s-0.481,0.215-0.481,0.481c0,1.726,0.343,3.397,1.02,4.97 c0.079,0.181,0.256,0.291,0.442,0.291c0.064,0,0.128-0.013,0.19-0.04c0.245-0.105,0.357-0.388,0.252-0.632 C23.354,20.663,23.037,19.118,23.037,17.524z"/> <defs> <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="0" y="1" width="51.449" height="51.416"> <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/> </filter> </defs> <path fill="#A72B2A" d="M34.654,33.6c-8.729,0-15.833-7.097-15.833-15.819c0-8.722,7.103-15.818,15.833-15.818 c8.73,0,15.834,7.096,15.834,15.818C50.488,26.503,43.385,33.6,34.654,33.6z M34.654,1c-9.26,0-16.793,7.528-16.793,16.781 c0,4.456,1.758,8.501,4.605,11.508L0.141,51.594c-0.188,0.189-0.188,0.493,0,0.682c0.094,0.095,0.217,0.141,0.34,0.141 s0.246-0.046,0.34-0.141l22.326-22.305c3.009,2.838,7.053,4.592,11.507,4.592c9.262,0,16.795-7.528,16.795-16.782 C51.449,8.528,43.916,1,34.654,1z"/> <path fill="#A72B2A" d="M41.011,6.419c-0.225-0.146-0.521-0.078-0.664,0.146c-0.143,0.224-0.077,0.522,0.146,0.665 c4.17,2.664,6.197,7.69,5.047,12.509c-0.063,0.258,0.098,0.518,0.355,0.579c0.039,0.009,0.075,0.014,0.113,0.014 c0.217,0,0.414-0.148,0.467-0.37C47.721,14.745,45.525,9.303,41.011,6.419z"/> <path fill="#A72B2A" d="M35.122,21.977v-4.171c0.992,0.178,1.749,1.044,1.749,2.086S36.114,21.799,35.122,21.977z M32.518,14.682 c0-1.005,0.703-1.845,1.643-2.064v4.128C33.221,16.526,32.518,15.687,32.518,14.682z M35.122,16.843v-4.225 c0.938,0.219,1.644,1.059,1.644,2.064c0,0.266,0.215,0.482,0.48,0.482s0.48-0.216,0.48-0.482c0-1.537-1.133-2.805-2.604-3.038v-0.7 c0-0.266-0.215-0.482-0.481-0.482c-0.266,0-0.48,0.216-0.48,0.482v0.7c-1.473,0.233-2.605,1.501-2.605,3.038 c0,1.536,1.133,2.805,2.605,3.037v4.203c-0.884-0.257-1.537-1.064-1.537-2.03c0-0.266-0.215-0.481-0.48-0.481 c-0.267,0-0.481,0.215-0.481,0.481c0,1.5,1.078,2.751,2.499,3.026v0.712c0,0.266,0.215,0.482,0.48,0.482 c0.267,0,0.481-0.216,0.481-0.482v-0.69c1.522-0.188,2.711-1.475,2.711-3.048C37.833,18.319,36.645,17.031,35.122,16.843z"/> </svg> */}
                  <p>Bevvi Partners with local stores to get you the lowest prices on alcohol, with next day delivery.</p>
               </div>
               <div class="col-sm-4">
                  {/* <!-- <img src="img/howitworks2.png" alt="Bevvi How it Works" /> --> */}
                  {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="27px" height="53px" viewBox="0 0 27 53" enable-background="new 0 0 27 53" xml:space="preserve"> <path fill="#A72B2A" d="M23.377,24.662c-2.063,2.862-5.381,4.323-9.861,4.338H13.44c-4.431,0-7.722-1.431-9.779-4.252 c-2.469-3.386-2.893-8.321-2.564-12.875c0.118,0.023,0.242,0.021,0.359-0.034l0.608-0.291C3.713,10.752,5.272,10,8.216,10 c2.94,0,4.499,0.751,6.149,1.546c1.695,0.817,3.448,1.662,6.655,1.662c2.218,0,3.733-0.414,4.913-0.878 C26.2,16.717,25.732,21.392,23.377,24.662z M22,47.995C22,50.166,18.107,52,13.5,52C8.892,52,5,50.166,5,47.995 c0-2.053,3.477-3.802,7.747-3.987v3.121c0,0.303,0.267,0.55,0.596,0.55s0.596-0.247,0.596-0.55V44 C18.352,44.112,22,45.894,22,47.995z M3.056,1.04L23.869,1c0.408,1.241,1.68,5.396,2.131,10.099C24.816,11.578,23.388,12,21.109,12 c-2.984,0-4.566-0.723-6.241-1.488c-1.719-0.786-3.499-1.599-6.75-1.599c-3.257,0-5.035,0.813-6.754,1.601L1,10.678 C1.479,6.169,2.666,2.241,3.056,1.04z M24.563,0.385C24.484,0.155,24.268,0,24.023,0h-0.002L2.941,0.043 C2.696,0.044,2.479,0.2,2.401,0.431C2.17,1.115-3.172,17.298,2.866,25.571C5.051,28.566,8.465,30.117,13,30.213 c-0.082,0.098-0.138,0.219-0.138,0.355v11.945c-4.846,0.203-8.548,2.426-8.548,5.234c0,2.945,4.072,5.252,9.269,5.252 c5.197,0,9.269-2.307,9.269-5.252c0-2.865-3.855-5.121-8.849-5.242V30.568c0-0.135-0.055-0.255-0.135-0.353 c4.629-0.095,8.102-1.679,10.307-4.734C30.172,17.168,24.795,1.066,24.563,0.385z"/> </svg> */}
                  <p>Save up to 25% on your favorite wine, beer, & liquor when you order online or in the app. Perfect for your next event, company party, or even corporate gift giving.</p>
               </div>
               <div class="col-sm-4">
                  {/* <!-- <img src="img/howitworks3.png" alt="Bevvi How it Works" /> --> */}
                  {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="74px" height="51px" viewBox="0 0 74 51" enable-background="new 0 0 74 51" xml:space="preserve"> <path fill="#A72B2A" d="M20.871,23.505H4.39c-1.916,0-3.475-1.559-3.475-3.475c0-1.916,1.559-3.475,3.475-3.475 c0.902,0,1.756,0.344,2.406,0.968c0.181,0.175,0.471,0.168,0.647-0.013c0.174-0.183,0.168-0.471-0.014-0.646 c-0.821-0.79-1.9-1.224-3.04-1.224C1.969,15.641,0,17.609,0,20.03c0,2.421,1.968,4.39,4.389,4.39h16.481 c0.252,0,0.458-0.205,0.458-0.458S21.124,23.505,20.871,23.505z"/> <path fill="#A72B2A" d="M20.871,20.336h-9.407c-0.843,0-1.529-0.686-1.529-1.529c0-0.843,0.686-1.53,1.529-1.53 c0.485,0,0.947,0.235,1.235,0.628c0.149,0.203,0.436,0.247,0.639,0.098c0.204-0.15,0.248-0.436,0.099-0.639 c-0.46-0.626-1.197-1.001-1.973-1.001c-1.347,0-2.444,1.097-2.444,2.445c0,1.347,1.097,2.443,2.444,2.443h9.407 c0.252,0,0.457-0.205,0.457-0.457S21.124,20.336,20.871,20.336z"/> <path fill="#A72B2A" d="M20.871,26.627H7.913c-1.957,0-3.549,1.592-3.549,3.549s1.592,3.549,3.549,3.549 c1.128,0,2.199-0.544,2.866-1.455c0.148-0.204,0.105-0.49-0.099-0.64c-0.205-0.147-0.49-0.104-0.639,0.1 c-0.496,0.677-1.291,1.079-2.128,1.079c-1.453,0-2.634-1.18-2.634-2.633s1.181-2.635,2.634-2.635h12.958 c0.252,0,0.457-0.204,0.457-0.457C21.328,26.832,21.124,26.627,20.871,26.627z"/> <defs> <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="22.55" y="0.85" width="49.684" height="40.111"> <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/> </filter> </defs> <path fill="#A72B2A" d="M71.307,11.401l-2.9,21.253c-0.154,1.121-1.123,1.967-2.254,1.967H32.95l-4.046-24.63h41.172 c0.359,0,0.7,0.155,0.936,0.425C71.248,10.687,71.355,11.045,71.307,11.401z M71.701,9.815c-0.41-0.47-1.002-0.739-1.625-0.739 H28.753l-1.289-7.844c-0.036-0.222-0.227-0.383-0.451-0.383h-4.006c-0.252,0-0.458,0.205-0.458,0.458s0.205,0.457,0.458,0.457 h3.617l6.378,38.814c0.036,0.222,0.227,0.383,0.452,0.383h34.93c0.252,0,0.457-0.205,0.457-0.457s-0.205-0.457-0.457-0.457H33.842 l-0.741-4.51h33.051c1.586,0,2.945-1.186,3.159-2.759l2.901-21.253C72.298,10.908,72.111,10.286,71.701,9.815z"/> <path fill="#A72B2A" d="M40.314,49.468c-1.645,0-2.982-1.337-2.982-2.981s1.337-2.982,2.982-2.982s2.982,1.338,2.982,2.982 S41.959,49.468,40.314,49.468z M40.314,42.589c-2.148,0-3.896,1.749-3.896,3.897s1.748,3.896,3.896,3.896s3.896-1.748,3.896-3.896 S42.463,42.589,40.314,42.589z"/> <path fill="#A72B2A" d="M63.366,49.468c-1.646,0-2.981-1.337-2.981-2.981s1.336-2.982,2.981-2.982c1.645,0,2.981,1.338,2.981,2.982 S65.011,49.468,63.366,49.468z M63.366,42.589c-2.149,0-3.896,1.749-3.896,3.897s1.747,3.896,3.896,3.896s3.896-1.748,3.896-3.896 S65.516,42.589,63.366,42.589z"/> <path fill="#A72B2A" d="M61.285,22.83c-1.083,0.479-2.377,0.924-4.506,0.924c-2.637,0-4.033-0.679-5.512-1.397 c-1.506-0.731-3.063-1.487-5.909-1.487c-2.852,0-4.409,0.758-5.915,1.49l-0.53,0.256c-0.229,0.108-0.325,0.38-0.218,0.609 c0.107,0.229,0.38,0.326,0.609,0.217l0.538-0.26c1.479-0.719,2.875-1.397,5.516-1.397c2.636,0,4.032,0.677,5.51,1.395 c1.507,0.732,3.064,1.489,5.911,1.489c2.305,0,3.758-0.507,4.877-1.002c0.23-0.103,0.334-0.372,0.231-0.604 C61.785,22.832,61.516,22.728,61.285,22.83z"/> </svg> */}
                  <p>Your order is delivered (for free) the next day by 5pm.</p>
               </div>
            </div>
         </div>
      </section>

      <section class="fullservice text-center d-flex justify-content-center align-items-center">
         <div class="container">
            <h3>FULL-SERVICE BARTENDERS <span>let us do the pouring</span></h3>
            <a href="book-bartender.html" class="btn btn-line">Get a quote</a>
         </div>
      </section>

      

      <div class="modal fade" id="openonload" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
               <div class="modal-body">
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <img src="img/close.svg"/>
                  </button>
                  <div class="popupcontent">
                     <h2 class="brgrmed">Get $10 Off!</h2>
                     <p>Sign up to redeem a $10 discount on your first order.</p>
                     <div class="popupform">
                        <form>
                           <input type="email" name="" class="form-control" placeholder="Enter email address"/>
                           <button type="submit">Sign up</button>
                        </form>
                     </div>
                     <p>We promise never to spam or give your email away.</p>
                     <label class="custom-checkbox text-left">I am at least 21 years of age.
                       <input type="checkbox"/>
                       <span class="checkmark"></span>
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div>
        
    );
}

export default body;