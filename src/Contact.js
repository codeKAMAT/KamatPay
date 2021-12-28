import React from 'react'

const Contact = () => {
    return (
        <>
         <section className='contactus-section'>
             <div className='container'>
                 <div className='row'>
                     <div className='col-12 col-lg-10 mx-auto'>
                         <div className='row'>
                            <div className='contact-leftside col-12 col-lg-5'>
                                <h1 className='main-heading fw-bold'>
                                    Connect with Our <br />Sales Team
                                </h1>
                                <p className='main-hero-para'>Lorem bla sdsa amet asdailt sanjt iskrth asscert saskitnh popgnt asaertn saethnk elit Descrunt weasur alisa  </p>
                           
                            <figure>
                                <img src='./images/callcenter.jpg' alt='contactUsImg' className='img-fluid' />
                            </figure>
                            </div>
                         {/* right side contact form */}
                         <div className='contact-rightside col-12 col-lg-7'>
                            <form>
                                <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input type="text" name='firstName' id="" className='form-control' placeholder='First Name' />
                                    </div>
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input type="text" name='lastName' id='' className='form-control' placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input type="text" name='phone' id="" className='form-control' placeholder='Phone Number' />
                                    </div>
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input type="text" name='email' id='' className='form-control' placeholder='Email ID' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 contact-input-field'>
                                        <input type="text" name='address' id="" className='form-control' placeholder='Add Address' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <input type="text" name='message' id="" className='form-control' placeholder='Enter Your Message' />
                                    </div>
                                </div>
                                <div className='form-check form-checkbox-style'>
                                    <input class='form-check-input' type="checkbox" value="" id="flexCheckChecked" />
                                    <label className='main-hero-para' class="form-check-label">
                                        I agree that the Easypay may contact me at the email id or phone number above
                                    </label>
                                </div>
                                    <button type='submit' className='btn btn-style w-100' >
                                        Submit
                                    </button>
                                 </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>   
        </>
    )
}

export default Contact
