import styled from 'styled-components';

const FaqDiv = styled.div`
    margin:3em 2em;

`
const TextBoxes = styled.div`
    background-color: rgb(204, 247, 174, 0.75);
    border-radius: 4px;
    padding: 0px 0.5em;
`
const QHeading = styled.h4`
    font-weight: bold;
    padding: 0.5em;
`

const FaqText = styled.p`
    text-align: left;
    padding:1em;
    word-wrap: normal;
`

const Faqs = () => {

    return (
        <FaqDiv>
            <TextBoxes>
            <QHeading>What's with the chilli in your icon?</QHeading>
            <FaqText>The stalk has a curl, representing my hair. The chilli is green, my favourite colour. A chilli 
                pepper to represent my love of spicy food and hot sauces. The glasses are the same as my glasses. Basically,
                it's my silly way of representing myself!
            </FaqText>
            </TextBoxes>

            <TextBoxes>
            <QHeading>How can I contact you about a role?</QHeading>
            <FaqText>Click on the box in the top right, click on the LinkedIn icon and message me there!</FaqText>

            </TextBoxes>

        </FaqDiv>
    )


}

export default Faqs;