import React from 'react';
import * as S from './styles';

export function Resume() {


    return (
        <S.Container>
            <S.Address>
                <S.Title>Complete seu pedido</S.Title>
                <S.AddressContent>
                    <S.TitleAddress>
                        Endereço de Entrega
                    </S.TitleAddress>
                    <S.ResumeInfo>
                        Informe o endereço onde deseja receber seu pedido
                    </S.ResumeInfo>
                </S.AddressContent>
            </S.Address>
            <S.Resume>
                <S.Title>Cafés selecionados</S.Title>
                <S.ResumeContent>

                </S.ResumeContent>
            </S.Resume>
        </S.Container>
    )
}