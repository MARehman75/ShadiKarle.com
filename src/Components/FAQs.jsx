import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FAQs = () => {


    const styles = {
        accordionHeader: {
            color: 'rgb(236 72 153)',
        },
        accordianBody: {
            color: '#8F9BB3',
        },
    };


    return (
        <>
            <div style={{margin: '100px'}}>
                <h1 style={styles.accordionHeader}>Frequently asked questions</h1>
                <p style={styles.accordianBody}>Need help? We've got you covered.</p>
            </div>
            <div style={{margin: '100px'}}>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0" className='my-4'>
                        <Accordion.Header><p style={styles.accordionHeader}>What is ShadiKarle.com?</p></Accordion.Header>
                        <Accordion.Body style={styles.accordianBody}>
                            Shadi Karle is Pakistan’s first matrimonial Web application that provides a safe and trustworthy platform for people looking for a life partner.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='my-4'>
                        <Accordion.Header><p style={styles.accordionHeader}>Can i create a profile for a friend/family member?</p></Accordion.Header>
                        <Accordion.Body style={styles.accordianBody}>
                            Yes, you can create a profile for yourself, friend or a family member. However you can only create one profile from a phone number.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='my-4'>
                        <Accordion.Header><p style={styles.accordionHeader}>Is Shadi Karle free?</p></Accordion.Header>
                        <Accordion.Body style={styles.accordianBody}>
                            Yes, Shadi Karle is free but for a limited time period. Create your profile on Shadi Karle today and get yourself verified for free.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='my-4'>
                        <Accordion.Header><p style={styles.accordionHeader}>How do i get my profile verified?</p></Accordion.Header>
                        <Accordion.Body style={styles.accordianBody}>
                            All matrimonial profiles on Shadi Karle are 100% verified through a two step process. If you wish to get verified instantly, visit your profile settings section and press the "Get Verified" button. You will receive a verification call within the next 24 to 48 hours where our customer service representative will verify your profile details according to your CNIC. Our on the ground team then schedules a field visit according to your availability.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='my-4'>
                        <Accordion.Header><p style={styles.accordionHeader}>Do i get any free matches?</p></Accordion.Header>
                        <Accordion.Body style={styles.accordianBody}>
                            You will have access to 5 free match requests once you register your profile on Shadi Karle.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className='my-4'>
                        <Accordion.Header><p style={styles.accordionHeader}>How do i know the profiles are authentic?</p></Accordion.Header>
                        <Accordion.Body style={styles.accordianBody}>
                            Profiles that are marked ‘verified’ and ‘managed by marriage bureau’ are trusted and reliable. To ensure that you connect with only the most reliable and trusted profiles, we recommend you avoid exchanging requests with ‘unverified’ users.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className='my-4'>
                        <Accordion.Header><p style={styles.accordionHeader}>Can i register without profile picture?</p></Accordion.Header>
                        <Accordion.Body style={styles.accordianBody}>
                            It is recommended that you upload a profile picture, however you can create a profile without it.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className='my-4'>
                        <Accordion.Header><p style={styles.accordionHeader}>Can i edit my profile?</p></Accordion.Header>
                        <Accordion.Body style={styles.accordianBody}>
                            Call at 0306-4303941 and our customer service representative will help you.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8" className='my-4'>
                        <Accordion.Header><p style={styles.accordionHeader}>Can i delete my profile?</p></Accordion.Header>
                        <Accordion.Body style={styles.accordianBody}>
                            Yes you can delete the account.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default FAQs
