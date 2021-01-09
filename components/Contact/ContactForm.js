import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { CircularProgress } from '@material-ui/core'
import { Alert } from '@material-ui/lab'


const ContactForm = () => {
  const { handleSubmit, register, setValue } = useForm()
  const [loading, setloading] = useState()
  const [success, setSuccess] = useState(null)
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };

   const trackevent = async ({name, email, phone_number, msg_subject, message}) => {
    const { default: ReactPixel } = await import('react-facebook-pixel')
    ReactPixel.init('1330647617290758', undefined, options)
    ReactPixel.pageView()
    ReactPixel.trackCustom('contact click', {name, email, phone_number, message, msg_subject})
  };

  const onsubmit = values => {
    const { name, email, phone_number, msg_subject, message } = values
    trackevent(values)
    setloading(true)
    emailjs
      .send(
        'Gmail',
        'template_rng2cws',
        {
          name,
          email,
          phone_number,
          msg_subject,
          message,
        },
        'user_ojITwwnFvXK7d1iaDiJ2U',
      )
      .then(
        function (response) {
          setloading(false)
          setSuccess(true)
        },
        function (err) {
          setloading(false)
          setSuccess(true)
        },
      )
  }

  return (
    <div className='contact-form'>
      <h3>Let's make your app !</h3>

      <form onSubmit={handleSubmit(onsubmit)} id='contactForm'>
        <div className='row'>
          <div className='col-lg-6 col-md-6'>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                id='name'
                className='form-control'
                placeholder='Your Name'
                ref={register}
                required
                onChange={event => setValue('name', event.target.value, true)}
              />
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                id='email'
                ref={register}
                className='form-control'
                placeholder='Your Email'
                required
                onChange={event => {
                  setValue('email', event.target.value, true)
                }}
              />
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div className='form-group'>
              <input
                type='text'
                name='phone_number'
                id='phone_number'
                ref={register}
                className='form-control'
                placeholder='Your Phone'
                required
                onChange={event => {
                  setValue('phone_number', event.target.value, true)
                }}
              />
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div className='form-group'>
              <input
                type='text'
                name='msg_subject'
                id='msg_subject'
                className='form-control'
                placeholder='Your Subject'
                ref={register}
                required
                onChange={event => setValue('msg_subject', event.target.value, true)}
              />
            </div>
          </div>

          <div className='col-lg-12 col-md-12'>
            <div className='form-group'>
              <textarea
                onChange={event => setValue('message', event.target.value, true)}
                name='message'
                className='form-control'
                id='message'
                rows='6'
                ref={register}
                placeholder='Your Message'></textarea>
            </div>
          </div>

          <div className='col-lg-12 col-md-12 text-center'>
            {loading ? (
              <CircularProgress color='secondary' />
            ) : (
              <>
                <button className='default-btn'>
                  <i className='bx bxs-paper-plane'></i>
                  Send Message
                  <span></span>
                </button>
                {success &&<Alert style={{marginTop: 20}} severity='success'>
                   Thanks for your message <strong>we will contact you soon !</strong>
                </Alert>}
                {
                    success === false && <Alert style={{marginTop: 20}} severity='error'>
                    An error has occurred <strong>please try again !</strong>
                 </Alert>
                }
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
