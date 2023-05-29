async function getdata(){
  let slider_blog = document.getElementById("get-slider");

  const res = await fetch("http://127.0.0.1:8000/slider/");
  console.log(res)

  const data = await res.json();
  // console.log(data);

  if (data && data.length) {
    data.forEach((element, key) => {
      slider_blog.innerHTML += `<li class="slider-item ${
        key == 0 ? "active" : ""
      }" data-hero-slider-item>

            <div class="slider-bg">
              <img src="${
                element.image.original
              }" width="1880" height="950" alt="" class="img-cover">
            </div>

           

            <h1 class="display-1 hero-title slider-reveal">
              For the love of <br>
              delicious food
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>`;
    });
  }

  // about
  let about_blog = document.getElementById("about");
  const about_res = await fetch("http://127.0.0.1:8000/about/images/");

  const about_data = await about_res.json();
  if (about_data.length) {
    about_data.forEach((element) => {
      about_blog.innerHTML = `<div class="container">
                    <div class="about-content">
                    <h2 class="headline-1 section-title">${element.about_info.title}</h2>
        
                    <p class="section-text" style="font-size: 18px;">
                    ${element.about_info.description}
                    </p>
        
                    <a href="#" class="btn btn-primary">
                        <span class="text text-1">Read More</span>
        
                        <span class="text text-2" aria-hidden="true">Read More</span>
                    </a>
        
                    </div>
        
                    <figure class="about-banner">
        
                    <img src="${element.image.at256}" width="570" height="570" loading="lazy" alt="about banner"
                        class="w-100" data-parallax-item data-parallax-speed="1">
        
                    <div class="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
                        <img src="./assets/images/about-abs-image.jpg" width="285" height="285" loading="lazy" alt=""
                        class="w-100">
                    </div>
        
                    <div class="abs-img abs-img-2 has-before">
                        <img src="./assets/images/badge-2.png" width="133" height="134" loading="lazy" alt="">
                    </div> 
        
                    </figure> 
        
                    <img src="./assets/images/shape-3.png" width="197" height="194" loading="lazy" alt="" class="shape mb-5">
                </div>
                <div class="about-video">
          <video width="1000px" controls>
            <source src="./assets/images/video.mp4" type="video/mp4">
          
          </video>
              `;
    });
  }


  // menu
  let menu_blog = document.getElementById("menulist");
  const menu_res = await fetch("http://127.0.0.1:8000/menu/images/");
  const menu_data = await menu_res.json();
  if (menu_data.length) {
    menu_data.forEach((element) => {
      menu_blog.innerHTML += `
        
        <li>
          <div class="menu-card hover:card">
            <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
              <img src="${element.image.original}" width="100" height="100" loading="lazy" alt="Greek Salad"
                class="img-cover">
            </figure>

            <div>

              <div class="title-wrapper">
                <h3 class="title-3">
                  <a href="#" class="card-title">${element.menu_info.title}</a>
                </h3>
              </div>

              <p class="card-text label-1">
              ${element.menu_info.description}
              </p>

            </div>

          </div>
        </li>
        `;
    });
  }

  // gallery
  let gallery_blog = document.getElementById("gallery_list");
  const gallery_res = await fetch("http://127.0.0.1:8000/gallery/images/");
  const gallery_data = await gallery_res.json();
  if (gallery_data.length) {
    gallery_data.forEach((element) => {
      gallery_blog.innerHTML += `
        <a href="./gallery.html" onclink(current_data())>
        <li>
          <div class="event-card has-before hover:shine">
    
            <div class="card-banner img-holder" style="--width: 350; --height: 450;">
              <img src="${element.image.original}" width="350" height="450" loading="lazy"
                alt="Flavour so good you’ll try to eat with your eyes." class="img-cover">
    
            </div>
    
            <div class="card-content">
              <p class="card-subtitle label-2 text-center">${element.gallery_info.title}</p>
    
              <h3 class="card-title title-2 text-center">
              ${element.gallery_info.description}
              </h3>
            </div>
    
          </div>
        </li>
      </a>
    
        `
    });
  }
}


