import '../src/styles/news.scss';
import '../src/components/common-script.js';

class MyNews extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <div>
                    <time datetime="">112.10.06</time>
                    <h3><span>112.10.06</span>文化部「第45次中小學生讀物選介」獲選好書－有獎徵答等推廣活動開跑</h3>
                </div>
                <p>
                    文化部每年辦理「中小學生讀物選介」，由專業評審選出適合中小學生閱讀的書籍，今年度（第45次）評選結果已於日前公布，為了將評審精心推薦的書單傳遞給更多師生、家長，文化部特別製作精選好書導讀文章，結合有獎徵答活動，邀請全國閱讀旅者們，打開書本，展開奇幻冒險。<br />
                    文化部表示，本次主題為「讀之冒險─時空祕鑰」，邀請知名漫畫家莊永新、國立交通大學外國語文學系李家沂副教授、長期關注兒童權益與未來發展之作家諶淑婷，撰寫獲選讀物介紹文章，引領讀者遨遊書海，探索閱讀的各種風貌，並於112年10月6日至11月5日舉辦有獎徵答活動，只要於活動期間內閱讀文章及精選之星書單，並至官網「有獎徵答」專區進行答題，即可...參加抽獎。<br />
                    本次獎品有電子圖書禮券及精選之星圖書，包括「勇閱冒險獎」、「翻山閱海獎」、「知識旅者獎」、「鍾愛閱讀獎」及「FB好書帶回家獎」等個人獎，以及廣邀學校團體總動員參與的「愛書團體獎」，得獎名單預計於11月17日前公告於官方網站，歡迎立即上網參加活動，探索閱讀新世界！<br />
                    除了有獎徵答活動外，文化部今年邀請眾多學校、出版社、實體及網路書店等單位辦理線上線下獲選書展，系列推廣活動訊息將於官網和FB粉絲專頁依序發布，歡迎踴躍參與！<br />
                    ★有獎徵答活動頁<br />
                    ★FB粉絲專頁「好書帶回家獎」貼文
                </p>
            </div>
        `;
   }
}

customElements.define('my-news', MyNews);