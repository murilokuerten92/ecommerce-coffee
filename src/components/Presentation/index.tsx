import * as S from './styles';
import { faqs } from '@/constants/datas';

export function Presentation() {



    return (
        <S.Container>
            <S.InfoSection>
                <S.Title>

                </S.Title>
                <S.SubTitle>

                </S.SubTitle>
                {faqs.map(faq => (
                    <S.Faq key={faq.id}>
                        <S.FaqColumn>
                            <S.FaqChildren>
                                <S.Box color={faq.color}>
                                    <S.FaqIcon icon={faq.icon} />
                                </S.Box>
                                <S.FaqText>
                                    {faq.description}
                                </S.FaqText>
                            </S.FaqChildren>
                        </S.FaqColumn>
                    </S.Faq>
                ))}

            </S.InfoSection>
            <S.InfoImage>

            </S.InfoImage>
        </S.Container>
    )
}