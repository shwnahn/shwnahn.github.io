quotes = [
    {
        "quote": "너 자신을 알라.",
        "author": "소크라테스"
    },
    {
        "quote": "행복은 습관이다, 그것을 몸에 지니라.",
        "author": "허버드"
    },
    {
        "quote": "최고에 도달하려면 최저에서 시작하라.",
        "author": "P.시루스"
    },
    {
        "quote": "인내는 쓰지만 그 열매는 달다.",
        "author": "아리스토텔레스"
    },
    {
        "quote": "세상에서 가장 어려운 일은 생각하고, 쓰고, 분명하게 말하는 것이다.",
        "author": "헨리 데이비드 소로우"
    },
    {
        "quote": "최고급 음식을 가장 즐기는 방법은 그것을 나누는 것이다.",
        "author": "장자크 루소"
    },
    {
        "quote": "지식보다 중요한 것은 상상력이다.",
        "author": "알베르트 아인슈타인"
    },
    {
        "quote": "희망은 꿈이 아니라 가능성을 믿는 것이다.",
        "author": "카프카"
    },
    {
        "quote": "자신감 있는 표정을 지으면 자신감이 생긴다.",
        "author": "찰스 다윈"
    },
    {
        "quote": "위대한 업적은 대개 커다란 위험을 감수한 결과이다.",
        "author": "헤로도토스"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
