import React from 'react'
import * as S from './styles'

function Footer(props) {
    return (
        <S.Wrapper>
            <S.Logo>
                <img src="/images/logo.png" alt="logo" />
                <div>
                    Copyright © 2022 bet2earn.app All Rights Reserved.
                </div>
            </S.Logo>
            <S.ListSocial>
                <S.Social>
                    <img src="/images/icons/telegram.png" alt="tele" />
                    <div>Terms Condition</div>
                </S.Social>
                <S.Social>
                    <img src="/images/icons/github.png" alt="github" />
                </S.Social>
                <S.Social>
                    <img src="/images/icons/twitter.png" alt="twitter" />
                    <div>
                        Privacy Policy
                    </div>
                </S.Social>
            </S.ListSocial>
        </S.Wrapper>
    )
}

export default Footer