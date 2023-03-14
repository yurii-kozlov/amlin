/* eslint-disable no-console */
import React, { ReactElement } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formInputs } from 'types/formInputs';
import { schema } from 'constants/validationSchemas/schema';
import { pagesDescriptions } from 'api/pagesDescriptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobile, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'components/Container';
import { MainContainer } from 'components/MainContainer';
import styles from 'styles/pages/contactUs.module.scss';

const ContactUs = (): ReactElement => {
  const {
    register, reset, handleSubmit, formState: {errors}
  } = useForm<formInputs>({
    resolver: yupResolver(schema)
  })

const onSubmit = (data: formInputs): void => {
  console.log(data);

  return reset();
}

  return (
    <MainContainer pageDescription={pagesDescriptions.contactUs} title='Contact Us' >
      <Container>
        <section className={cn(styles.section, styles.marginBottom)} data-testid="contactUs-page">
          <div className={styles.navigation} >
            <Link className={styles.navigationLink} href="/">Home</Link>
            <Link className={styles.navigationLink} href="/contactUs">Contact Us</Link>
          </div>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.description} >We love hearing from you, our Shop customers. <br />
            Please contact us and we will make sure to get back to you as soon as we possibly can.
          </p>
          <div className={styles.mainBlock}>

            <div className={styles.formBlock}>
              <div className={styles.formSection}>
                <form
                  action="#"
                  className={styles.form}
                  method="get"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className={styles.inputsWrapper} >
                    <div className={styles.inputBlock} >
                      <label htmlFor='name'>
                        <h5 className={styles.inputTitle}>Your Name</h5>
                        <input
                          className={styles.formInput}
                          data-testid="input-name"
                          id='name'
                          {...register('name')}
                          name='name'
                          placeholder='Your Name'
                          type="text"
                        />
                        {errors.name && <p className={styles.error} data-testid="input-name-error">{errors.name?.message}</p>}
                      </label>
                    </div>
                    <div className={styles.inputBlock} >
                      <label htmlFor='name'>
                        <h5 className={styles.inputTitle}>Your Email</h5>
                        <input
                          className={styles.formInput}
                          data-testid="input-email"
                          id='email'
                          placeholder='Your Email'
                          {...register('email')}
                          name='email'
                          type="email"
                        />
                        {errors.email && <p className={styles.error} data-testid="input-email-error"> {errors.email?.message} </p>}
                      </label>
                    </div>
                    <div className={styles.inputBlock} >
                      <label htmlFor='name'>
                        <h5 className={styles.inputTitle}>Your Phone Number</h5>
                        <input
                          className={styles.formInput}
                          data-testid="input-phoneNumber"
                          {...register('phoneNumber')}
                          id='phoneNumber'
                          name='phoneNumber'
                          placeholder='Your Phone'
                          type="tel"
                        />
                        {errors.phoneNumber && <p className={styles.error} data-testid="input-phoneNumber-error">{errors.phoneNumber?.message}</p>}
                      </label>
                    </div>
                  </div>
                  <div className={cn(styles.inputBlock, styles.textAreaBlock)} >
                    <label htmlFor='name'>
                      <h5 className={styles.inputTitle}>What&apos;s on your mind?</h5>
                      <textarea
                        className={styles.textarea}
                        cols={30}
                        data-testid="textarea-message"
                        id="contactMessage"
                        {...register('contactMessage')}
                        name="contactMessage"
                        placeholder='Jot us a note and we’ll get back to you as quickly as possible'
                        rows={7}
                      />
                      {errors.contactMessage && <p className={styles.error} data-testid="textarea-message-error">{errors.contactMessage?.message}</p>}
                    </label>
                  </div>
                  <button
                    className={styles.buttonSubmit}
                    data-testid="button-submit"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className={styles.shopBlock}>
              <ul className={styles.shopInfoList} >
                <h4 className={styles.shopInfoTitle}>Address:</h4>
                <li className={styles.shopInfoListItem}>
                  <div className={styles.icon} >
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  1234 Street Adress City Address, 1234
                </li>

                <h4 className={styles.shopInfoTitle}>Phone:</h4>
                <li className={styles.shopInfoListItem}>
                  <div className={styles.icon} >
                    <FontAwesomeIcon icon={faMobile} shake />
                  </div>
                  <a className={styles.phoneNumber} href="tel:(00)1234 5678">(00)1234 5678</a>
                </li>
                <h4 className={styles.shopInfoTitle}>We are open:</h4>
                <li className={styles.shopInfoListItem}>
                  <div className={styles.icon} >
                    <FontAwesomeIcon icon={faClock} spin />
                  </div>
                  Monday - Thursday: 9:00 AM - 5:30 <br />
                  Friday 9:00 AM - 6:00 PM <br />
                  Saturday: 11:00 AM - 5:00 PM</li>
                <h4 className={styles.shopInfoTitle}>E-mail:</h4>
                <li className={styles.shopInfoListItem}>
                  <div className={styles.icon} >
                    <FontAwesomeIcon icon={faEnvelope} beat />
                  </div>
                  <a className={styles.email} href="mailto:shop@email.com">shop@email.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </MainContainer>
  );
}

export default ContactUs;
