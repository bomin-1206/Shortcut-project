const CJ = () => {
    const cj_text = [
        '제일제당',
        '어느 공장에서 무엇을 생산하는지 말해보세요.',
        '이 회사에 들어오면 가장 자신 있는 것은?',
        '품질관리가 더 적합한 것 같은데 왜 생산을 지원했나요?',
        '제일제당에서 SCM이 무슨 일을 하는지 아는 대로 이야기해보세요.',
        '학창시절 어려웠던 경험은 무엇입니까?',
        '프레시웨이',
        '실습은 어디서 하였고 학교에서 배운 것의 차이는 무엇이었나요?',
        '최근에 읽은 기사는 무엇인가요?',
        '입사 후 하고 싶은 것은 무엇인가요?',
        '식자재 영업에 대해 아는 대로 설명하세요.',
        '전공과 다른데 왜 지원하셨는지?',
        '거래처를 어떻게 설득할 것인가?',
        'CJ프시웨이를 처음 알게 된 계기는 무엇인가?',
        '올리브네트웍스',
        '올리브네트웍스에 필요한 기술이 있다면 어떤 것이 필요할까?',
        'SCM은 무엇이라고 생각하는가?',
        '다른 계열사가 아닌 이 계열사에 지원한 이유는?',
        '올리브영에 그눔하게 되면 어떤 업무를 하는지 아신나요?',
        'ENM',
        '마케팅이 무엇이라고 생각하십니까?',
        'ENM방송 중 마케팅이 잘 안 됐다고 생각하는 것은 무엇인가요?',
        '사람 만나는게 힘들지 않은가요?',
        '중국에서 프로그램을 제작한다면 잘 될 것 같은 콘텐츠는 무엇인가?',
        'CJ콘텐츠 중 가장 재밌게 본 것 & 가장 아쉬운 것에 대해 말해보세요.',
        '영화관 부가사업 매출 확대방안을 제시해보세요.',
        '다른 지원자들 말고 지원자가 뽑혀야 하는 이유가 있는가?',
        'K-con 부대행사를 기획해보세요.',
        'CJ ENM의 경쟁사는?',
        '대한통운',
        'CJ에 대하여 알고 있는 것을 말허시오.',
        '직무를 수행하며 어떤 게 제일 중요하다고 생각하나요?',
        '물류란 무엇인가요?',
        '물류업에서 중요한 역량은 무엇인가요?',
        '직무와 관련된 경험이 있나요?',
        '직무에 지원한 이유가 뭔가요?',
        '워라밸에 대해 어떻게 생각합니까?',
        '물류의 미래는 어떨 것 같은가요?'
        ]
    return (
        <div className="CJ">
            {
                cj_text.map((cj_text, index) => {
                    return (
                        <div>
                            {
                                index===0 || index===6 || index===14 || index===19 || index===29 ? <p className="accent"><br />{cj_text}</p> : <p className="text">{cj_text}</p>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CJ;