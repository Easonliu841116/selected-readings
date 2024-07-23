import '../styles/footer.scss';

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer>
        <p>版權所有 文化部︱隱私權及安全政策宣示︱著作權聲明</p>
      </footer>

      <svg class="gotop" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="55" height="55" viewBox="0 0 55 55">
  <defs>
    <filter id="Path_16179" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feFlood flood-opacity="0.149"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Path_16178" x="12.303" y="16.173" width="30.396" height="21.861" filterUnits="userSpaceOnUse">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="1.5" result="blur-2"/>
      <feFlood flood-color="#fff" flood-opacity="0.502"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_11261" data-name="Group 11261" transform="translate(-1753 -52.5)">
    <g transform="matrix(1, 0, 0, 1, 1753, 52.5)" filter="url(#Path_16179)">
      <path id="Path_16179-2" data-name="Path 16179" d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" transform="translate(47.5 7.5) rotate(90)" fill="#fff"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 1753, 52.5)" filter="url(#Path_16178)">
      <path id="Path_16178-2" data-name="Path 16178" d="M9.456,0,0,8.913l9.457,9.7.543-.5L1.043,8.935,9.956.5Z" transform="translate(36.8 22.1) rotate(90)" fill="#f5f5f5" stroke="#212f5d" stroke-linecap="round" stroke-width="2"/>
    </g>
  </g>
</svg>

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