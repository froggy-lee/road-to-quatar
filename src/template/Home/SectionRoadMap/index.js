import React from 'react'
import SectionHeading from '../../../components/SectionHeading'
import * as S from './styles'

const timeLine = [{
    time:'2021 Dec',
    des:['Lorem ipsum dolor sit','Lorem ipsum dolor sit','Lorem ipsum dolor sit']
},
{
    time:'2021 Jan',
    des:['Lorem ipsum dolor sit','Lorem ipsum dolor sit','Lorem ipsum dolor sit']
},
{
    time:'2021 Feb',
    des:['Lorem ipsum dolor sit','Lorem ipsum dolor sit','Lorem ipsum dolor sit']

},
{
    time:'2021 July',
    des:['Lorem ipsum dolor sit','Lorem ipsum dolor sit','Lorem ipsum dolor sit']

},
{
    time:'2021 Aug',
    des:['Lorem ipsum dolor sit','Lorem ipsum dolor sit','Lorem ipsum dolor sit']

}]

function RoadmapSection(props) {
    return (
        <S.Wrapper>
            <SectionHeading title="ROADMAP" />
            <div className='roadmap-pic'>
                <img src="/images/roadmap/roadmap.png" alt="roadmap" />
                <S.TimeLine>
                {timeLine.map(item => {
                    const { des } =item
                    return(
                        <S.Des key={item.time}>{item.time}
                            {des?.map((line,index) => {
                                return(
                                    <S.Line key={index}>
                                        {line}
                                    </S.Line>
                                )
                            })}
                        </S.Des>
                    )
                })}
            </S.TimeLine>
            </div>
            
        </S.Wrapper>
    )
}

export default RoadmapSection