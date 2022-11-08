const LG = () => {
    const lg_text = [
        '경쟁에서 져본 적이 있는지, 그때 배운 점이 있다면?',
        '유체역학에서 가장 중요한 공식이 무엇일까?',
        '캡틴 아메리카와 아이언맨이 싸우면 어느 팀을 택할 것인지?',
        '열역학적 원리를 적용해서 에너지 효율을 높이는 법은?',
        '팀원들과 의견을 조율했던 경험이 있나?',
        '다상 유동 분리기 과제를 진행하면서 힘든 점이 있었는지?',
        '세부전공은 팀의 직무에 기여할 수 없는데 괜찮은지?',
        '박사를 안 하고 석사까지 학위를 마친 이유는?',
        'LG베스트샵을 방문해 본 적이 있는가? 매니저에게 상담을 받아 보았는가?',
        '제품의 가격을 낮춘다면 회사의 손익에 영향을 미치는데(올려야 하나 내려야 하나)?',
        '면접관에게 직무와 관련해서 물어보고 싶은 것 있나?',
        '에어컨의 원리에 대해 간단히 설명해라',
        '구리의 부식에 대해 아는 것이 있는가?'
        ]
    return (
        <div className="LG">
            {
                lg_text.map((lg_text, index) => {
                    return (
                        <p className="text">{lg_text}</p>
                    )
                })
            }
        </div>
    )
}

export default LG;