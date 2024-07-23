import '../styles/header.scss';

class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
    <header>
    <div class="upper-part">
        <img src="/src/assets/logo.png" alt="中小學生讀物選介-logo" width="240" height="60" />

        <ul>
            <li><a href="#">首頁</a></li>
            <li><a href="#">最新消息</a></li>
            <li><a href="#">聯絡我們</a></li>
        </ul>

        <div class="search-toggle">
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                width="22" height="22" viewBox="0 0 22 22">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_1141" data-name="Rectangle 1141" width="22" height="22"
                            fill="#7e7e7e" />
                    </clipPath>
                </defs>
                <g id="Group_11208" data-name="Group 11208" clip-path="url(#clip-path)">
                    <path id="Path_16149" data-name="Path 16149"
                        d="M22,21.095l-7.33-7.263A8.411,8.411,0,0,0,8.325,0a8.4,8.4,0,0,0,0,16.806,8.247,8.247,0,0,0,5.459-2.075L21.113,22l.88-.905ZM8.325,15.538a7.135,7.135,0,0,1,0-14.269,7.135,7.135,0,0,1,0,14.269"
                        fill="#7e7e7e" />
                </g>
            </svg>

            <svg class="close-icon hidden" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_1220" data-name="Rectangle 1220" width="22" height="22"
                            fill="#7e7e7e" />
                    </clipPath>
                </defs>
                <g id="Group_11490" data-name="Group 11490" transform="translate(0 0)">
                    <g id="Group_11486" data-name="Group 11486" transform="translate(0 0)"
                        clip-path="url(#clip-path)">
                        <path id="Path_16324" data-name="Path 16324"
                            d="M21.184,21.947a.853.853,0,0,1-.605-.25L.344,1.461A.856.856,0,0,1,1.554.251L21.79,20.486a.856.856,0,0,1-.605,1.461"
                            transform="translate(-0.04 0)" fill="#7e7e7e" />
                        <path id="Path_16325" data-name="Path 16325"
                            d="M.856,22.04a.856.856,0,0,1-.605-1.461L20.486.344a.856.856,0,0,1,1.21,1.21L1.461,21.79a.853.853,0,0,1-.605.25"
                            transform="translate(0 -0.04)" fill="#7e7e7e" />
                    </g>
                </g>
            </svg>
        </div>

        <form class="search" action="" method="">
            <input type="text" placeholder="搜尋" />
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22"
                    height="22" viewBox="0 0 22 22">
                    <defs>
                        <clipPath id="clip-path">
                            <rect id="Rectangle_1141" data-name="Rectangle 1141" width="22" height="22"
                                fill="#7e7e7e" />
                        </clipPath>
                    </defs>
                    <g id="Group_11208" data-name="Group 11208" clip-path="url(#clip-path)">
                        <path id="Path_16149" data-name="Path 16149"
                            d="M22,21.095l-7.33-7.263A8.411,8.411,0,0,0,8.325,0a8.4,8.4,0,0,0,0,16.806,8.247,8.247,0,0,0,5.459-2.075L21.113,22l.88-.905ZM8.325,15.538a7.135,7.135,0,0,1,0-14.269,7.135,7.135,0,0,1,0,14.269"
                            fill="#7e7e7e" />
                    </g>
                </svg>
            </button>
        </form>

        <a href="#" class="facebook">
            <svg id="fb-m" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22"
                height="22" viewBox="0 0 22 22">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_1190" data-name="Rectangle 1190" width="22" height="22"
                            fill="#7e7e7e" />
                    </clipPath>
                </defs>
                <g id="Group_11329" data-name="Group 11329" clip-path="url(#clip-path)">
                    <path id="Path_16307" data-name="Path 16307"
                        d="M10.183.03A11,11,0,1,0,21.962,10.123,10.983,10.983,0,0,0,10.183.03m1.852,7.157c-.008.737-.021,1.565-.033,2.339a17.674,17.674,0,0,1,2.635.051c.056.247-.388,2.222-.48,2.792l-2.212.013v6.912H9S8.92,12.361,8.92,12.36l-2.536-.011L6.423,9.6,8.942,9.6l.022-2.569c.192-3.33,2.663-3.284,5.726-3.113l.013,2.32c-.926.032-2.674-.12-2.669.954"
                        transform="translate(0 0)" fill="#7e7e7e" fill-rule="evenodd" />
                </g>
            </svg>
        </a>

        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="22" height="17.217" viewBox="0 0 22 17.217">
            <defs>
                <clipPath id="clip-path">
                    <rect id="Rectangle_1221" data-name="Rectangle 1221" width="22" height="17.217"
                        fill="#7e7e7e" />
                </clipPath>
            </defs>
            <g id="漢堡" clip-path="url(#clip-path)">
                <path id="Path_16326" data-name="Path 16326"
                    d="M21.043,1.913H.957A.957.957,0,0,1,.957,0H21.043a.957.957,0,1,1,0,1.913" fill="#7e7e7e" />
                <path id="Path_16327" data-name="Path 16327"
                    d="M21.043,17.913H.957A.957.957,0,0,1,.957,16H21.043a.957.957,0,0,1,0,1.913"
                    transform="translate(0 -8.348)" fill="#7e7e7e" />
                <path id="Path_16328" data-name="Path 16328"
                    d="M21.043,33.913H.957A.957.957,0,0,1,.957,32H21.043a.957.957,0,1,1,0,1.913"
                    transform="translate(0 -16.696)" fill="#7e7e7e" />
            </g>
        </svg>
    </div>

    <nav>
        <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="22" height="22" viewBox="0 0 22 22">
            <defs>
                <clipPath id="clip-path">
                    <rect id="Rectangle_1220" data-name="Rectangle 1220" width="22" height="22" fill="#7e7e7e" />
                </clipPath>
            </defs>
            <g id="Group_11490" data-name="Group 11490" transform="translate(0 0)">
                <g id="Group_11486" data-name="Group 11486" transform="translate(0 0)" clip-path="url(#clip-path)">
                    <path id="Path_16324" data-name="Path 16324"
                        d="M21.184,21.947a.853.853,0,0,1-.605-.25L.344,1.461A.856.856,0,0,1,1.554.251L21.79,20.486a.856.856,0,0,1-.605,1.461"
                        transform="translate(-0.04 0)" fill="#7e7e7e" />
                    <path id="Path_16325" data-name="Path 16325"
                        d="M.856,22.04a.856.856,0,0,1-.605-1.461L20.486.344a.856.856,0,0,1,1.21,1.21L1.461,21.79a.853.853,0,0,1-.605.25"
                        transform="translate(0 -0.04)" fill="#7e7e7e" />
                </g>
            </g>
        </svg>

        <a href="#">首頁</a>
        <a href="#">聯絡我們</a>

        <ul>
            <li>
                <span>最新消息</span>

                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24.431"
                    height="31.281" viewBox="0 0 24.431 31.281">
                    <defs>
                        <filter id="Path_16311" x="0" y="0" width="24.431" height="31.281"
                            filterUnits="userSpaceOnUse">
                            <feOffset input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feFlood flood-color="#fff" flood-opacity="0.502" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                        </filter>
                    </defs>
                    <g id="箭頭" transform="translate(8.214 8.197)">
                        <g transform="matrix(1, 0, 0, 1, -8.21, -8.2)" filter="url(#Path_16311)">
                            <path id="Path_16311-2" data-name="Path 16311"
                                d="M7.565,0,0,7.13l7.565,7.756.435-.4L.834,7.148,7.965.4Z"
                                transform="translate(8.21 8.2)" fill="#d8d8d8" stroke="#d8d8d8"
                                stroke-linecap="round" stroke-width="1" />
                        </g>
                    </g>
                </svg>
            </li>
            <li><a href="#">關於我們</a></li>
            <li><a href="#">最新消息</a></li>
        </ul>

        <ul>
            <li>
                <span>報名專區</span>

                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24.431"
                    height="31.281" viewBox="0 0 24.431 31.281">
                    <defs>
                        <filter id="Path_16311" x="0" y="0" width="24.431" height="31.281"
                            filterUnits="userSpaceOnUse">
                            <feOffset input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feFlood flood-color="#fff" flood-opacity="0.502" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                        </filter>
                    </defs>
                    <g id="箭頭" transform="translate(8.214 8.197)">
                        <g transform="matrix(1, 0, 0, 1, -8.21, -8.2)" filter="url(#Path_16311)">
                            <path id="Path_16311-2" data-name="Path 16311"
                                d="M7.565,0,0,7.13l7.565,7.756.435-.4L.834,7.148,7.965.4Z"
                                transform="translate(8.21 8.2)" fill="#d8d8d8" stroke="#d8d8d8"
                                stroke-linecap="round" stroke-width="1" />
                        </g>
                    </g>
                </svg>
            </li>
            <li><a href="#">活動簡章</a></li>
            <li><a href="#">線上報名</a></li>
            <li><a href="#">表單下載</a></li>
            <li><a href="#">常見問答</a></li>
        </ul>

        <ul>
            <li>
                <span>選書指南</span>

                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24.431"
                    height="31.281" viewBox="0 0 24.431 31.281">
                    <defs>
                        <filter id="Path_16311" x="0" y="0" width="24.431" height="31.281"
                            filterUnits="userSpaceOnUse">
                            <feOffset input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feFlood flood-color="#fff" flood-opacity="0.502" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                        </filter>
                    </defs>
                    <g id="箭頭" transform="translate(8.214 8.197)">
                        <g transform="matrix(1, 0, 0, 1, -8.21, -8.2)" filter="url(#Path_16311)">
                            <path id="Path_16311-2" data-name="Path 16311"
                                d="M7.565,0,0,7.13l7.565,7.756.435-.4L.834,7.148,7.965.4Z"
                                transform="translate(8.21 8.2)" fill="#d8d8d8" stroke="#d8d8d8"
                                stroke-linecap="round" stroke-width="1" />
                        </g>
                    </g>
                </svg>
            </li>
            <li><a href="#">當屆獲選書單</a></li>
            <li><a href="#">當屆精選之星</a></li>
            <li><a href="#">當屆評審報告</a></li>
            <li><a href="#">歷屆推薦</a></li>
            <li><a href="#">獲選標章</a></li>
        </ul>

        <ul>
            <li>
                <span>有獎徵答</span>

                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24.431"
                    height="31.281" viewBox="0 0 24.431 31.281">
                    <defs>
                        <filter id="Path_16311" x="0" y="0" width="24.431" height="31.281"
                            filterUnits="userSpaceOnUse">
                            <feOffset input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feFlood flood-color="#fff" flood-opacity="0.502" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                        </filter>
                    </defs>
                    <g id="箭頭" transform="translate(8.214 8.197)">
                        <g transform="matrix(1, 0, 0, 1, -8.21, -8.2)" filter="url(#Path_16311)">
                            <path id="Path_16311-2" data-name="Path 16311"
                                d="M7.565,0,0,7.13l7.565,7.756.435-.4L.834,7.148,7.965.4Z"
                                transform="translate(8.21 8.2)" fill="#d8d8d8" stroke="#d8d8d8"
                                stroke-linecap="round" stroke-width="1" />
                        </g>
                    </g>
                </svg>
            </li>
            <li><a href="#">活動辦法</a></li>
            <li><a href="#">我要參加</a></li>
            <li><a href="#">得獎名單</a></li>
        </ul>

        <ul>
            <li>
                <span>主題活動</span>

                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24.431"
                    height="31.281" viewBox="0 0 24.431 31.281">
                    <defs>
                        <filter id="Path_16311" x="0" y="0" width="24.431" height="31.281"
                            filterUnits="userSpaceOnUse">
                            <feOffset input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feFlood flood-color="#fff" flood-opacity="0.502" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                        </filter>
                    </defs>
                    <g id="箭頭" transform="translate(8.214 8.197)">
                        <g transform="matrix(1, 0, 0, 1, -8.21, -8.2)" filter="url(#Path_16311)">
                            <path id="Path_16311-2" data-name="Path 16311"
                                d="M7.565,0,0,7.13l7.565,7.756.435-.4L.834,7.148,7.965.4Z"
                                transform="translate(8.21 8.2)" fill="#d8d8d8" stroke="#d8d8d8"
                                stroke-linecap="round" stroke-width="1" />
                        </g>
                    </g>
                </svg>
            </li>
            <li><a href="#">線上活動</a></li>
            <li><a href="#">實體活動</a></li>
            <li><a href="#">精彩回顧</a></li>
        </ul>
    </nav>
</header>
    `;
	}
}

customElements.define('my-header', MyHeader);

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector("nav .close-icon");
const nav = document.querySelector("nav");
const navItem = document.querySelectorAll("nav ul li span");

const searchToggle = document.querySelector(".search-toggle");
const searchIcon = document.querySelector(".search-icon");
const closeSearchIcon = document.querySelector(".search-toggle .close-icon");
const search = document.querySelector(".search");

menuIcon.addEventListener("click", () => {
	nav.classList.add("open");
});

closeIcon.addEventListener("click", () => {
	nav.classList.remove("open");
});

navItem.forEach((item) => {
	item.addEventListener("click", () => {
		item.parentNode.parentNode.classList.toggle("open");
	});
});

searchIcon.addEventListener("click", () => {
	search.classList.add("open");
	searchIcon.classList.add("hidden");
	closeSearchIcon.classList.add("open");
});

closeSearchIcon.addEventListener("click", () => {
	search.classList.remove("open");
	searchIcon.classList.remove("hidden");
	closeSearchIcon.classList.remove("open");
});