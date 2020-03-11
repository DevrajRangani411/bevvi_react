import React from 'react'

const header = ()=>{
    return(
        <nav className="navbar fixed-top navbar-light bg-light pl-0 pr-0">
         <div className="container">
            <div className="col pl-0">
               <div className="d-none d-md-block">
                  <a href="register.html" className="btn btn-primary">Login/Register</a>
               </div>
               <a href="register.html" className="d-block d-md-none d-lg-none text-left"><svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.000217438H19V23.5636H0V0.000217438Z" fill="white"/></mask><g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.1364 20.4094C18.1364 21.6674 17.1233 22.6911 15.8784 22.6911H3.12161C1.87668 22.6911 0.863636 21.6674 0.863636 20.4094V11.882C0.863636 10.6239 1.87668 9.60022 3.12161 9.60022H15.8784C17.1233 9.60022 18.1364 10.6239 18.1364 11.882V20.4094ZM3.45455 6.32749C3.45455 3.3192 6.16636 0.872945 9.5 0.872945C12.8336 0.872945 15.5455 3.3192 15.5455 6.32749V8.72749H3.45455V6.32749ZM16.4091 8.77636V6.32749C16.4091 2.83833 13.3095 0.000217438 9.5 0.000217438C5.6905 0.000217438 2.59091 2.83833 2.59091 6.32749V8.77636C1.1223 9.03251 0 10.3259 0 11.882V20.4098C0 22.1483 1.40039 23.5639 3.12161 23.5639H15.8784C17.5996 23.5639 19 22.1483 19 20.4094V11.882C19 10.3259 17.8777 9.03251 16.4091 8.77636Z" fill="#A72B2A"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 16.2857C10.25 16.7584 9.91363 17.1429 9.5 17.1429C9.08637 17.1429 8.75 16.7584 8.75 16.2857V13.7143C8.75 13.2416 9.08637 12.8571 9.5 12.8571C9.91363 12.8571 10.25 13.2416 10.25 13.7143V16.2857ZM9.5 12C8.67275 12 8 12.7689 8 13.7143V16.2857C8 17.2311 8.67275 18 9.5 18C10.3273 18 11 17.2311 11 16.2857V13.7143C11 12.7689 10.3273 12 9.5 12Z" fill="#A72B2A"/></svg></a>
            </div>
            <div className="col text-center">
               <a className="logo" href="#">
                   <img src="img/logo.png" alt="Logo" />
                  {/* <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5116 19.5711C8.03451 19.1285 5.31853 21.9662 5.00171 25.0961C5.00171 25.0961 7.34815 20.8326 11.5569 21.6813C12.1108 21.793 13.0189 21.7216 13.2884 21.1386C13.6774 20.2995 12.1087 19.6471 11.5116 19.5711Z" fill="#A72B2A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6486 28.4231C14.2832 28.1196 13.6018 27.9892 13.1189 27.9996C12.5683 28.0121 12.0223 28.1536 11.5174 28.3596C10.3821 28.823 9.39514 29.8129 8.84497 30.858C9.44331 30.486 10.0786 30.1604 10.7417 29.9063C11.4642 29.6289 12.2523 29.3445 13.035 29.5534C13.6529 29.7182 14.5535 30.5117 15.1082 29.7971C15.4599 29.3441 15.0148 28.7275 14.6486 28.4231Z" fill="#A72B2A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118.673 0.851211C118.075 0.286505 117.328 0.000415225 116.452 0H116.45C115.612 0 114.884 0.285259 114.286 0.849135C113.677 1.42173 113.368 2.14131 113.368 2.98837C113.368 3.80055 113.676 4.5027 114.284 5.07654C114.881 5.64166 115.61 5.92775 116.45 5.92817H116.454C117.327 5.92817 118.072 5.64249 118.672 5.07903C119.28 4.50561 119.589 3.80346 119.589 2.99128C119.59 2.14505 119.282 1.42505 118.673 0.851211Z" fill="#A72B2A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4766 21.3398C35.6946 20.4292 36.0214 19.5747 36.4479 18.7999C36.9777 17.8328 37.6445 16.9849 38.4293 16.2791C39.2124 15.574 40.1097 15.0139 41.0967 14.6132C42.0766 14.2158 43.1405 14.014 44.2595 14.014H44.2641C45.3474 14.0148 46.4033 14.2175 47.4023 14.6173C48.4084 15.0201 49.3244 15.5819 50.1241 16.2878C50.9259 16.9966 51.609 17.8536 52.1546 18.8352C52.591 19.6195 52.8999 20.4645 53.0739 21.3469L35.4766 21.3398ZM53.5614 13.8882L53.5526 13.8799C52.3813 12.689 50.9949 11.734 49.4311 11.0406C47.8574 10.3426 46.1562 9.98799 44.3733 9.98633H44.3691C42.5176 9.98633 40.7529 10.348 39.124 11.0601C37.4971 11.7735 36.0596 12.7663 34.8513 14.0111C33.6418 15.2564 32.6755 16.725 31.9784 18.3747C31.2779 20.0314 30.922 21.8265 30.9216 23.7103C30.9208 25.5606 31.275 27.339 31.9738 28.9962C32.6706 30.6492 33.6459 32.1191 34.8729 33.3652C36.1003 34.6133 37.5652 35.607 39.227 36.3182C40.8895 37.0316 42.6904 37.3937 44.5784 37.3953H44.5829C46.5399 37.3953 48.3752 37.0374 50.0394 36.3315C51.6833 35.6335 53.2022 34.7018 54.5537 33.5599C55.1135 33.0778 55.3913 32.7045 55.4544 32.3503C55.5216 31.9642 55.3713 31.5606 55.0209 31.1861L54.3005 30.2381C53.6701 29.6481 52.7811 29.6937 52.0877 30.3485C51.1601 31.2541 50.0357 31.992 48.7447 32.5422C47.4629 33.0899 46.0832 33.3672 44.6432 33.3672H44.6353H44.5406C43.3082 33.3353 42.1294 33.0911 41.0365 32.6418C39.9428 32.1942 38.9637 31.5772 38.1262 30.8074C37.2945 30.0438 36.6127 29.1294 36.1007 28.0897C35.6818 27.2393 35.409 26.3229 35.289 25.3671L54.7269 25.375H54.7315C55.4365 25.375 56.0373 25.25 56.5178 25.0038C56.9334 24.7899 57.4292 24.3141 57.4296 23.2598C57.4304 21.442 57.0762 19.7047 56.3753 18.0965C55.6786 16.4983 54.7319 15.082 53.5614 13.8882Z" fill="#A72B2A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M81.1572 10.382L79.412 10.3812C78.8307 10.3812 78.3976 10.6154 78.1223 11.0821L69.8057 29.8781L61.5025 11.0692C61.3837 10.8093 61.0661 10.3729 60.2705 10.3725L58.5253 10.3721C58.0275 10.3721 57.6675 10.4987 57.4233 10.7603C57.0363 11.1739 57.2074 11.8063 57.4001 12.3112L67.7533 35.5966C68.0614 36.2784 68.6539 36.6537 69.4204 36.6541H70.2388H70.2405C70.9709 36.6541 71.5443 36.2784 71.8561 35.5949L82.2247 12.3253C82.3605 12.0267 82.7213 11.2332 82.2052 10.7441C81.9502 10.5037 81.5977 10.382 81.1572 10.382Z" fill="#A72B2A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M109.044 10.3933L107.298 10.3929H107.296C106.717 10.3929 106.284 10.6275 106.008 11.0938L97.6918 29.8898L89.3885 11.081C89.2706 10.821 88.9534 10.3846 88.157 10.3842L86.4122 10.3838H86.4089C85.9122 10.3838 85.5527 10.5104 85.3102 10.7716C84.9232 11.1848 85.0934 11.8167 85.2857 12.3225L95.6393 35.6091C95.9486 36.2905 96.5412 36.6654 97.3073 36.6654L98.1257 36.6663H98.1269C98.8573 36.6663 99.4307 36.2897 99.7421 35.6062L110.111 12.3374C110.247 12.0389 110.609 11.2458 110.091 10.7558C109.836 10.5158 109.484 10.3938 109.044 10.3933Z" fill="#A72B2A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M117.047 10.3877H115.958H115.956C114.948 10.3877 114.347 10.9482 114.346 11.8867L114.336 35.165C114.336 35.6429 114.487 36.0204 114.786 36.2873C115.066 36.5377 115.456 36.6648 115.946 36.6656H117.036H117.039C117.531 36.6656 117.939 36.5286 118.219 36.2687C118.5 36.0083 118.648 35.6271 118.648 35.1667L118.658 11.8887C118.659 10.9499 118.057 10.3889 117.047 10.3877Z" fill="#A72B2A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7106 33.4181C11.8604 33.4181 9.24487 32.9506 7.89249 31.5425C5.70176 29.2621 8.86162 26.8061 10.9602 26.1226C12.3678 25.6638 13.4117 27.3027 14.8114 26.794C15.5318 26.532 16.0334 25.9964 16.1555 25.4072C16.253 24.938 16.1094 24.4343 15.6447 24.0074C12.4429 21.0685 6.24861 23.7434 4.73802 27.514C4.22564 26.3277 3.93913 25.021 3.93913 23.647C3.93913 18.2503 8.31394 13.8759 13.7106 13.8759C19.1073 13.8759 23.4821 18.2503 23.4821 23.647C23.4821 29.0433 19.1073 33.4181 13.7106 33.4181ZM21.5455 12.4214C19.8925 11.2501 17.9704 10.4383 15.8889 10.102C15.8088 10.0887 15.7282 10.0771 15.6476 10.0654C15.5077 10.0455 15.3674 10.0272 15.2266 10.0119C14.7288 9.95622 14.223 9.9255 13.7106 9.9255C10.104 9.9255 6.82744 11.3377 4.38924 13.6393L4.44031 1.55249C4.44488 0.604944 3.83906 0.0365015 2.82093 0.0323493L1.72183 0.0273666C0.704114 0.0232143 0.0941484 0.586259 0.0899962 1.53339L-0.000107646 22.7335C-0.00384467 23.6931 0.0692349 24.6253 0.209166 25.5272C0.387297 26.8339 0.748128 28.0812 1.26467 29.2438C1.30702 29.3381 1.34813 29.4332 1.39214 29.5266C1.40958 29.564 1.42702 29.6018 1.44488 29.6387C3.50024 33.8935 7.67616 36.9151 12.5891 37.3187C12.8665 37.3411 13.1459 37.3557 13.4274 37.3615C13.5055 37.3627 13.5827 37.3669 13.6612 37.3673C13.6778 37.3673 13.694 37.3685 13.7106 37.3685C13.7563 37.3685 13.8011 37.3656 13.8464 37.3652C13.9323 37.3644 14.0179 37.3611 14.103 37.3586C14.5182 37.3465 14.9285 37.3171 15.3333 37.2685C15.391 37.2614 15.4483 37.2539 15.5056 37.2465C15.8424 37.2016 16.1762 37.1476 16.5047 37.0787C16.7015 37.0376 16.8966 36.9923 17.0901 36.9429C17.1196 36.9355 17.1483 36.9272 17.1777 36.9193C23.027 35.3755 27.3425 30.0191 27.3425 23.647C27.3425 20.4149 26.2292 17.4456 24.3719 15.1009C23.5618 14.0782 22.6101 13.1755 21.5455 12.4214Z" fill="#A72B2A"/></svg> */}
               </a>
            </div>
            <div className="col text-right pr-0 d-flex align-items-center justify-content-end">
               <div className="searchbox d-none d-lg-block">
                  <form>
                     <input type="text" name="search" placeholder="Search Beer, Wine, Liquor & Mixers" />
                     <button type="submit"><img src="img/search-icon.png" alt="Search" /></button>
                  </form>
               </div>
               <div className="dropdown d-block d-lg-none searchbox-dropdown">
                  <button className="dropdown-toggle" data-toggle="dropdown">
                     <img src="img/search-icon-m.png" alt="Search Icon" /> 
                     {/* <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Group 3</title> <desc>Created with Sketch.</desc> <defs> <polygon id="path-1" points="0 0 24 0 24 23.9999 0 23.9999"></polygon> </defs> <g id="Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="product-list-copy-3" transform="translate(-239.000000, -13.000000)"> <g id="Group-3" transform="translate(239.000000, 13.000000)"> <mask id="mask-2" fill="white"> <use xlink:href="#path-1"></use> </mask> <g id="Clip-2"></g> <path d="M24,23.2799 L23.28,23.9999 L15.68,16.3999 C14,17.8799 11.84,18.7999 9.4,18.7999 C4.2,18.7999 0,14.5999 0,9.3999 C0,4.1999 4.2,-0.0001 9.4,-0.0001 C14.6,-0.0001 18.8,4.1999 18.8,9.3999 C18.8,11.7999 17.88,13.9999 16.4,15.6799 L24,23.2799 Z M17.8,9.3999 C17.8,4.7599 14.04,1.0399 9.44,1.0399 C4.8,1.0399 1.08,4.7999 1.08,9.3999 C1.08,14.0399 4.84,17.7599 9.44,17.7599 C14.04,17.7999 17.8,14.0399 17.8,9.3999 L17.8,9.3999 Z" id="Fill-1" fill="#A72B2A" mask="url(#mask-2)"></path> </g></g></g></svg>  */}
                  </button>
                  <div className="dropdown-menu">
                     <div className="searchbox">
                        <form>
                           <input type="text" name="search" placeholder="Search Beer, Wine, Liquor & Mixers" />
                           <button type="submit">
                              <img src="img/search-icon.png" alt="Search Icon" />
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
               <a href="#" className="carticon">
                   <img src="img/cart.png" alt="shopping cart"/>
                  {/* <svg width="22" height="31" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5371 6C15.281 6 15.0741 5.78243 15.0741 5.51326V1.76685C15.0741 1.32198 14.9487 1.05135 14.8852 0.973473H6.11477C6.05181 1.05135 5.92589 1.32149 5.92589 1.76685V5.51326C5.92589 5.78243 5.71895 6 5.46294 6C5.2074 6 5 5.78243 5 5.51326V1.76685C5 0.74276 5.4472 0 6.06338 0H14.9371C15.5528 0 16 0.74276 16 1.76685V5.51326C16 5.78243 15.7931 6 15.5371 6Z" fill="#A72B2A"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.67278 4.96747C1.2458 4.96747 0.897837 5.31444 0.897837 5.74119V28.3303C0.897837 28.7566 1.2458 29.1035 1.67278 29.1035H19.975C20.402 29.1035 20.749 28.7566 20.749 28.3303V5.74119C20.749 5.31444 20.402 4.96747 19.975 4.96747H1.67278ZM19.975 30.0001H1.67278C0.750123 30.0001 -0.00012207 29.251 -0.00012207 28.3303V5.74119C-0.00012207 4.81999 0.750123 4.07092 1.67278 4.07092H19.975C20.8967 4.07092 21.647 4.81999 21.647 5.74119V28.3303C21.647 29.251 20.8967 30.0001 19.975 30.0001Z" fill="#A72B2A"/></svg> */}
                  <span className="cartnumber col-primary">999</span>
               </a>
            </div>
         </div>
      </nav>
    );
}

export default header;