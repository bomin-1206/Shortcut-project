const Creativity = () => {
    const creativity_text = [
        '당신이 면접관이라면 어떤 것을 중심으로 평가하겠습니까?',
        '한 달을 시한부로 살 수 있고, 한 달 동안 5,000만원의 돈이 주어진다면 어떻게 사용하겠습니까?',
        '빨간 벽돌을 건축자재 외에 사용할 수 있는 용도를 5가지 말해보세요.',
        '아침에 일어났더니 읽지 않은 이메일이 2000통이나 와 있습니다. 이중 시간적으로 300통만 회신할수 있다면 어떤 것부터 하겠습니까?',
        '10억이 생기면 무엇이 하고 싶습니까?',
        '전국에 치킨집이 몇 개가 있을 것 같습니까?',
        '3차세계대전이 일어나 10명만 살아났는데, 끝까지 살아남기 위해서는 7명만이 과학자가 개발한 캡슐로 들어가야합니다. 현재 변호사와 그 아내, 대학 1학년 여대생, 프로축구 선수, 소설가, 지성파 여배우, 과학자, 경찰, 목사, 유학생 등 10명이 있는데, 당신이 결정권자라면 어떻게 하겠습니까?',
        '애인이 친한 친구와 바람을 피면 누구를 택하겠습니까, 만약 또 그 반대 상황이라면 어떻게 하겠습니까?',
        '서울 시내에 있는 중국집 전체의 하루 판매량을 논리적인 근거를 제시하여 정량을 계싼하시오.',
        '아이들을 웃게 하는 방법은 무엇입니까?',
        'Kill115145425가 무슨뜻입니까?',
        '자신이 얼마짜리 사람이라고 생각합니까?',
        '자기소개서에 "활달하고 수다를 좋아한다"고 했는데, 1분 동안 면접관을 웃겨보세요.',
        '자기 자신을 잘 표현할 수 있는 그림을 그리세요. 그리고 그 그림을 통해 3분 동안 자기 자신에 대해 설명하고, 입사한 동기와 연관 지어 설명해보세요.'
        ]
    return (
        <div className="Creativity">
            {
                creativity_text.map((creativity_text, index) => {
                    return (
                        <p className="text">{creativity_text}</p>
                    )
                })
            }
        </div>
    )
}

export default Creativity;