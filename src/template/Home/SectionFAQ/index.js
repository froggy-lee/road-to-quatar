import React, { useState } from 'react'
import SectionHeading from '../../../components/SectionHeading'
import * as S from './styles'


function SectionFAQ(props) {
    const [listQuestion, setListQuestion] = useState([{
            title:'When is the official launch?',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            active: false
        },
        {
            title:'When is the official launch?',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            active: false
        },
        {
            title:'When is the official launch?',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            active: false
        },
        {
            title:'When is the official launch?',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            active: false
        },
        {
            title:'When is the official launch?',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            active: false
        },
        {
            title:'When is the official launch?',
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            active: false
        }])

    const handleSetActive = id => {
        let {title, des, active} = listQuestion[id]
        listQuestion.splice(id,1,{title,des,active:!active})
        console.log(listQuestion)
        setListQuestion([...listQuestion])
    }
    console.log(listQuestion)
    return (
        <S.Wrapper>
            <SectionHeading title="FAQ" />
            <S.ListQA>
                {listQuestion.map((question,index) => {
                    return(
                        <S.QA key={index}>
                        <div className='title'>
                            <span>
                            {index+1}. {question.title}
                            </span>
                            <div className='active' onClick={() => handleSetActive(index)}>{question.active ? '-':'+'}</div>    
                        </div>
                        <div className={question.active ? 'des-active' : 'des'}>
                            {question.des}
                        </div>
                        </S.QA>
                    )
                })}
            </S.ListQA>
        </S.Wrapper>
    )
}

export default SectionFAQ