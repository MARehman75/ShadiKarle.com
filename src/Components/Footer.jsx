import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

const AppFooter = () => {
    //bgColor='light'
    return (
        <MDBFooter style={{ backgroundColor: 'rgb(251 207 232)' }} className='text-center text-lg-start text-muted'>
            <section style={{ backgroundColor: 'rgb(236 72 153)', color: 'white' }} className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='light' fab icon='facebook-f' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='light' fab icon='twitter' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='light' fab icon='google' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='light' fab icon='instagram' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='light' fab icon='youtube' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon color='light' fab icon='tiktok' />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow style={{ color: 'rgb(236 72 153)' }} className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <div>
                                <img src="./images/logo.png" alt="portfolio" />
                            </div>
                            <h5>
                                Laakhon Verified Rishtay Ab Aik Click Par!
                            </h5>
                            <p className='d-flex justify-content-center align-items-center my-4'>
                                <span className='me-3'>Register for free</span>
                                <MDBBtn style={{ color: 'rgb(236 72 153)' }} type='button' outline color="light" rounded>
                                    Sign up!
                                </MDBBtn>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>More</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    FAQs
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    About
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Privacy Policy
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Terms of Service
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon style={{ color: 'rgb(236 72 153)' }} icon='home' className='me-2' />
                                Lahore, Punjab 54000, Pakistan
                            </p>
                            <p>
                                <MDBIcon style={{ color: 'rgb(236 72 153)' }} icon='envelope' className='me-3' />
                                rehman.hanif16@gmail.com
                            </p>
                            <p>
                                <MDBIcon style={{ color: 'rgb(236 72 153)' }} icon='phone' className='me-3' /> + 92 306 430 3941
                            </p>
                            <p>
                                <MDBIcon style={{ color: 'rgb(236 72 153)' }} icon='print' className='me-3' /> + 92 344 061 8166
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgb(236 72 153)', color: 'white' }}>
                All Rights Reserved 2023 © ShadiKarle.com
                {/* <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    ShadiKarle.com
                </a> */}
            </div>
        </MDBFooter>
    );
}

export default AppFooter;