import styled from 'styled-components';

const HomeDiv = styled.div`
    margin:3em 2em;

`
const TextBoxes = styled.div`
    background-color: rgb(204, 247, 174, 0.75);
    border-radius: 4px;
    padding: 0px 0.5em;
`
const HomeText = styled.p`
    text-align: center;
    padding:1em;
    word-wrap: normal;
`

const Home = () => {
    return (
        <HomeDiv>

            <h4>My name is Rita Toussaint and this is my portfolio site!</h4>
            <TextBoxes>
            <HomeText>I was originally an aspiring academic and frequent volunteer before realising that that lifestyle was not for me. During the pandemic, I started to experiment with coding - Python, HTML, CSS, Bootstrap - and found that I not only enjoyed it, but that I was <em>good</em> at it. 
                From there, I aimed to build a career in tech: starting with 2 short courses in CyberSecurity at Glasgow Clyde College and then a low-code position at With You With Me. I was, unfortunately, made redundant but I took this bad luck as a chance to kick my coding into high gear 
                and thus be able to secure a job in software development.</HomeText>
            </TextBoxes>
            <TextBoxes>
            <HomeText>I started at CodeClan in November 2022 and I have gone from having a small amount of coding knowledge to being able to build full-stack websites in a matter of weeks. 
                I have discovered that I have a flair for front-end but I still have skills to share in back-end development too! On top of studying, I have been attending networking events and workshops whilst 
                keeping my LinkedIn page up to date and building my portfolio site (psst - you’re already here!).</HomeText>
            </TextBoxes>
            <TextBoxes>
            <HomeText>I know that this field will be a source of constant learning and I could not be more excited! Learning new things - languages, a new art form, coding - brings me such joy and inspires me. 
                At my core, my biggest wish is to leave this world in a better place than I found it. I hope to use my new skills to improve lives, be that through designing a website or an app for a charity or through helping people protect their data. I sincerely hope that this site will be a springboard for me to achieve that.
            </HomeText>
            </TextBoxes>
        </HomeDiv>
    )

}

export default Home;