const Kakao = () => {
    const kakao_text = [
        '미디어/홍보직',
        '평창 올림픽과 관련하여 지역 특성을 살릴 수 있는 콘텐츠는?',
        '위기 관리 경험이 있나요?',
        '입사하면 어떤 사람이 되고 싶나요?',
        '기존과 다른 업무 스타일에 적응할 수 있나요?',
        'IT/인터넷',
        '무슨 프로그램을 개발하고 싶나요?',
        'C/C++의 차이가 무엇인가요?',
        '지구의 질량을 더하기로 구하라',
        '검색을 많이 하나요?',
        '다음, 네이버, 구글 검색을 비교해서 설명한다면?',
        '경영/기획/컨설팅',
        '10년 뒤 본인의 모습은?',
        '과거 일을 할 때 스스로 개선한 업무적인 부분은?',
        '가장 어려웠던 커뮤니케이션 경험은?'
        ]
    return (
        <div className="Kakao">
            {
                kakao_text.map((kakao_text, index) => {
                    return (
                        <div>
                            {
                                index===0 || index===5 || index===11 ? <p className="accent"><br />{kakao_text}</p> : <p className="text">{kakao_text}</p>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Kakao;