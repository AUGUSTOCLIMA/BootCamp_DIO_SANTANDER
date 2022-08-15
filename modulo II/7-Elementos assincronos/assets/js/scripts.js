const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.wepburl;
    } catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementsByTagName('cat');
    catImg.src = getCats(wepburl);
};

catBtn.addEventListener('click', loadImg);

loadImg();
