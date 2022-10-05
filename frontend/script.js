const rootElement = document.querySelector("#root");

let checkerboard = function () {
  return `<div class='checkerboard'>
    <div class="b"><span class="blink">LOADING</span></div>             
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div>
    <div class="b"><span class="blink">LOADING</span></div>     
    <div class="b">VIITA</div> 
  </div>
  `;
};

rootElement.insertAdjacentHTML("afterbegin", checkerboard());

setTimeout(function () {
  const checkerboard = document.querySelector(".checkerboard");
  checkerboard.remove();
}, 3000);

let norbiElement = function () {
  return `
  <section class="section1">
  <header>
      <img class="logo" src="pics/logo2.png" alt="logo">
      <a class="cta" href="#"><button>Home</button></a>
      <nav>
          </div>
          <ul class="nav__links">
              <li><a href="#">Products</a></li>
              <li><a href="#">About</a></li>
          </ul>
      </nav>
  </header>
  <main>
  <div class="index-main">
      <div class="main-text">
          <div id="#main-left-text"><p>The health,</p>
              <p>soft- &</p>
              <p>hardware</p>
              <p>company.</p>
          </div>
      </div>
  </div>
      <div id="index-logos">
          <div class="index-container">
              <div class="index-cont-pics">
                  <img src="pics/logos2.png">
              </div>
          </div>
      </div>
  </main>
</section>
  `;
};

rootElement.insertAdjacentHTML("beforeend", norbiElement());

let tiborpage = function () {
  return `
  <section class=section4>
  <div class="left-wrapper">
  <span class="left text">FINISHED</span>
  <span class="left text delay-1">FINISHED</span>
  <span class="left text delay-2">FINISHED</span>
  <span class="left text delay-3">FINISHED</span>
  <span class="left text delay-4">FINISHED</span>
  <span class="left text delay-5">FINISHED</span>
  <span class="left text delay-6">FINISHED</span>
  <span class="left text delay-7">FINISHED</span>
  <span class="left text delay-8">FINISHED</span>
</div>
<div class="number-wrapper">
  <span class="number-one">1</span>
  <span class="number-two">2</span>
  <span class="number-three">3</span>
  <span class="number-four">4</span>
  <span class="number-five">5</span>
  <span class="number-six">6</span>
  <span class="number-seven">7</span>
  <span class="number-eight">8</span>
  <span class="number-nine">9</span>
</div>
<div class="right-wrapper">
  <span class="right text">PROJECTS</span>
  <span class="right text delay-1">PROJECTS</span>
  <span class="right text delay-2">PROJECTS</span>
  <span class="right text delay-3">PROJECTS</span>
  <span class="right text delay-4">PROJECTS</span>
  <span class="right text delay-5">PROJECTS</span>
  <span class="right text delay-6">PROJECTS</span>
  <span class="right text delay-7">PROJECTS</span>
  <span class="right text delay-8">PROJECTS</span>
</div>
</div>
</section>`;
};
rootElement.insertAdjacentHTML("beforeend", tiborpage());
