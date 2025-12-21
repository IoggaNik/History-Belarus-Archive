import {
    MainSection,
    ContainerForms,
    BlockForm,
    HeadindBlock,
} from './FormsStyled.styled';

import FormFound from './FormFound/FormFound';
import FormAdd from './FormAdd/FormAdd';

const MainForm = () => {
    return (
        <MainSection>
            <ContainerForms>
                <BlockForm>
                    <HeadindBlock>
                        <h1>Найти героя</h1>
                    </HeadindBlock>
                    <FormFound />
                </BlockForm>
                <BlockForm>
                        <h1>Добавить героя</h1>
                    <FormAdd />
                </BlockForm>
            </ContainerForms>
        </MainSection>
    );
};

export default MainForm;