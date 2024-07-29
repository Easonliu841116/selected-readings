import '../styles/footer.scss';

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="left-half">
            <a class="logo" href="#">
              <img src="/src/assets/ministry-of-culture.svg" alt="文化部" width="178" height="40" />
            </a>

            <p>服務專線：02-86925588  分機 6083  聯合線上股份有限公司</p>
            <p>客服信箱：book.service@moc.gov.tw</p>
            <p>網站累積瀏覽人數：123,456人次</p>
          </div>

          <div class="right-half">
            <img class="qrcode" src="/src/assets/qrcode.svg" alt="qrcode" width="110" height="110" />
            <div class="fb-page" data-href=""></div>
          </div>
        </div>

        <p class="links">版權所有
          <a href="#">文化部</a>︱<a href="#">隱私權及安全政策宣示</a>︱<a href="#">著作權聲明</a>
        </p>
      </footer>

      <img class="gotop" src="/src/assets/gotop.svg" alt="gotop" width="55" height="55" />
    `;
  }
}

customElements.define('my-footer', MyFooter);

const toTop = document.querySelector(".gotop");

window.onscroll = function () {
  if (
    document.documentElement.scrollTop >= 200 ||
    document.body.scrollTop >= 200
  ) {
    toTop.classList.add("gotop-block");
  } else {
    toTop.classList.remove("gotop-block");
  }
};

toTop.addEventListener("click", function (e) {
  window.scrollTo({ top: 0, behavior: "smooth" });
});