import * as S from './styles';
import { faqs } from '@/constants/datas';
import coffeeLogo from '@/assets/images/logoCoffeeDelivery.png';

export function Presentation() {



  return (
    <S.Container>
      <S.InfoSection>
        <S.Title>
          Find the perfect coffee to any day hour
        </S.Title>
        <S.SubTitle>
          With the Coffee Delivery you receive your coffee anywhere, the any hour
        </S.SubTitle>
        <S.Faq>
          {faqs.map(faq => (
            <S.FaqColumn key={faq.id}>
              <S.FaqChildren>
                <S.Box color={faq.color}>
                  <S.FaqIcon icon={faq.icon} />
                </S.Box>
                <S.FaqText>
                  {faq.description}
                </S.FaqText>
              </S.FaqChildren>
            </S.FaqColumn>
          ))}
        </S.Faq>
      </S.InfoSection>
      <S.InfoImage>
        <S.CoffeeLogo src={coffeeLogo} alt='logo coffee' />
      </S.InfoImage>
    </S.Container>
  )
}
