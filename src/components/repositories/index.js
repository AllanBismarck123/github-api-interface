import React from 'react'
import * as S from "./styled"
import RepositoryItem from '../repository-item'

function Repositories() {
  return (
    <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
    >
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel><RepositoryItem name="exercicio-frontend-chuvainc" linkToRepo="https://github.com/AllanBismarck123/exercicio-frontend-chuvainc" fullName="AllanBismarck123/exercicio-frontend-chuvainc" /></S.WrapperTabPanel>
        <S.WrapperTabPanel><RepositoryItem name="Mobile-Development" linkTopRepo="https://github.com/AllanBismarck123/Mobile-Development" fullName="AllanBismarck123/Mobile-Development"/></S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories