import * as S from './styles';
import { faqs } from '@/constants/datas';
import { Presentation } from '@/components/Presentation';
import { CardCoffee } from './components/CardCoffee';

export function Home() {


    return (
        <S.Container>
            <Presentation />

            <h1 className='CoffeeTitle'>Nossos cafés</h1>
            <S.SectionCards>
                <CardCoffee />
            </S.SectionCards>
        </S.Container>
    )
}