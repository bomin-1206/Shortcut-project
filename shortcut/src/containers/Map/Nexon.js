const Nexon = () => {
    const nexon_text = [
        '어떤 게임을 좋아하는가?',
        '본인의 성격이나 업무 스타일에 특징이 있다면?',
        '우리 회사에 지원한 이유는 무엇인가?',
        '이직한 이유는 무엇인가?',
        '즐겨하는 게임과 본인이 생각하는 그 게임의 개선해야 할 점이 무엇인가?',
        'IT/인터넷 직군',
        '지금까지 어떤 프로젝트를 해봤나?',
        '전 회사에서 진행했던 프로젝트의 아키텍처를 설명해 보라.',
        'AWS 기반 인프라 서비스의 구성 요소들에 대해 설명해 보라.',
        '살면서 힘들었던 점은 무엇인가? 또 어떻게 극복했나?',
        '실제로 게임을 해킹해본 적이 있는가?',
        '운영체제 커널 분석을 수행해 본 적이 있나?',
        '직접 만들어본 게임은 무엇이며 자신은 얼마나 기여했나?',
        '자신이 제출한 포트폴리오를 설명해 보라.',
        '마케팅 부서에서 계속 내용이 바뀌면 어떻게 대처할 것인가?',
        '기존에 종사하던 사업군과 넥슨의 비즈니스 환경이 많이 다른데 어떻게 적응하고 극복할 생각인가?',
        '최근 모바일 게임 시장에 대해 어떻게 생각하는가?',
        '(중국어로 된 글을 보여주며)중국어가 특기인데 이 글을 번역해 보라.',
        '게임을 기획한다면 어떤 게임을 기획하고 싶은가?',
        '친구는 많은가? 술은 잘 마시나?',
        '시간이 촉박한 시험 기간에 어떻게 시간 관리를 했나?',
        '인생에서 겪었던 갈등 중 가장 심각했던 것은 무엇인가?',
        '게임이 출시되는 상황을 가정하고 생길 수 있는 문제에 대해 이야기해 보라.',
        '사용할 줄 아는 프로그래밍 언어는 어떤 것들이 있으며 얼마나 하나?',
        '팀 프로젝트를 할 때 의사소통에 문제가 있으면어떻게 해결할 것인가?',
        '중국에서 잘 되고 있는 모바일 게임은 무엇이 있나? 왜 성공했을까?',
        '화이트보드에 큐로 스택을 구현해 보라.',
        '본인이 사용할 줄 아는 언어들의 차이점은 무엇인가?',
        '프로세스와 스레드의 차이점은 무엇인가?',
        '다음의 웹 관련 함수를 설명해 보라.',
        '왜 게임 기획자의 길을 선택했으며, 어떤 노력을 했나?',
        '3~5분간 자기 소개를 해봐라.',
        '입사하면 어떤 일을 하게 될 것 같은가?',
        '업데이트한 내용에 큰 문제가 생겼다면 어떻게 할 것인가?',
        '본인이 지원한 직무가 무슨일을 한다고 생각하나?',
        '다음과 같은 데이터 테이블이 있다고 할 때, 원하는 결과를 얻기 위해 테이블 내의 값들을 어떻게 활용해야 하는가?',
        'GET과 POST의 차이는?',
        '디자인 직군',
        '자신이 속할 팀이 어떤 일을 하는지 알고 있나?',
        '주로 영감은 어디에서 받는가?',
        '만약 자신이 게임 속에 있다면 어떤 역할을 할 것인가?',
        '최근 감명 깊게 읽은 책은?',
        '자신이 생각하는 리더란?',
        '업무 시 분쟁이 발생했을 때 본인만의 대처법이 있나?',
        '업무 중 스케줄에 없던 일이 생길 때가 많다. 어떻게 대처할 것인가?',
        '커뮤니케이션을 하는 나만의 스킬이 있다면?',
        '포트폴리오에 대해 PT를 해달라.',
        '각각 작업물에 대해서는 시간이 얼마나 소요되었나?',
        '어려운 지시를 받으면 어떻게 하겠는가?',
        '넥슨 관련 여혐 논란에 대해 어떻게 생각하나?',
        '일상에서 UX를 경험한 적이 있는가?',
        'UX 디자인이 무엇이라고 생각하는가?',
        '포트폴리오에 있는 프로젝트 시 어떤 문제들이 있었는지 설명해 보라.',
        '왜 게임업계에 오게 되었나?',
        '평소 작업할 때 어떤 디자인을 참고하나?',
        '본인이 하고 싶은 디자인이 있는가?',
        '업무량이 과다할 때 잘 버틸 수 있는가?',
        '마케팅/시장조사 직군',
        '우리 회사 연봉이 기대보다 낮은데 괜찮겠나?',
        '게임의 브랜드 마케팅은 어떻게 하는 것이 좋겠나?',
        '현재 넥슨의 상황이 많이 어려운데 앞으로 어떻게 하면 좋은가?',
        '온라인/모바일 게임 시장은 어떠한 상태인가?',
        '향후 중국 및 북미 모바일 게임 시장 판도를 예측해 보라.',
        '자신은 숫자와 창의 중 어떤 것에 더 가까운가?',
        '태국 게임 시장에 대해 설명해 보라.',
        '직무와 관련하여 자신 있는 것과 자신 없는 것은?'
        ]
    return (
        <div className="Nexon">
            {
                nexon_text.map((nexon_text, index) => {
                    return (
                        <div>
                            {
                                index===5 || index===37 || index===57 ? <p className="accent"><br />{nexon_text}</p> : <p className="text">{nexon_text}</p>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Nexon;