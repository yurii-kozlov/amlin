/* eslint-disable max-len */
import React, { ReactElement, useState } from 'react';
import Image from 'next/image'
import styles from 'styles/Footer.module.scss';
import classes from 'styles/container.module.scss';
import footerSectionStyles from 'styles/FooterSection.module.scss';
import { footerBlocks } from 'api/footerBlocks';
import { FooterSection } from 'components/Footer/FooterSection';
import { paymentSystemsImages } from 'api/paymentSystemsImages';
import { arrows } from 'api/logosLinksImages';

export const Footer: React.FC = (): ReactElement => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [isEmailInputError, setIsEmailInputError] = useState<boolean>(false);
  const [isEmailInputEmptyError, setIsEmailInputEmtyError] = useState<boolean>(false);
  const [areListsVisible, setAreListsVisible ] = useState<boolean>(false);

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.value) {
      setIsEmailInputEmtyError(true);
    } else {
      setIsEmailInputEmtyError(false);
    }

    if(event.target.value.length !==0 && !event.target.value.includes('@')) {
      setIsEmailInputError(true);
    } else {
      setIsEmailInputError(false);
    }

    setEmailInput(event.target.value);
  }

  const handleButtonClick = (): void => {
    if (emailInput.length === 0) {
      setIsEmailInputEmtyError(true);
    } else {
      setIsEmailInputEmtyError(false);
    }

    if(emailInput.length !==0 && !emailInput.includes('@')) {
      setIsEmailInputError(true);
    } else {
      setIsEmailInputError(false);
    }
  }

  const showList = (): void => setAreListsVisible(!areListsVisible);

  return (
    <section className={styles.section} >
      <div className={classes.container}>
        <div className={styles.upperPart} >
          <div className={styles.titles}>
            <h1 className={styles.titlesMain} >Sign Up To Our Newsletter.</h1>
            <h4 className={styles.titlesSubtitle} >Be the first to hear about the latest offers.</h4>
          </div>
          <div className={styles.subscription}>
            <div className={styles.inputBlock}>
              <input
                className={styles.input}
                id="emailInput"
                onChange={handleEmailInput}
                placeholder='Your Email'
                type="email"
                value={emailInput}
              />
              {isEmailInputEmptyError && <p className={styles.error} >This field is required</p>}
              {isEmailInputError && <p className={styles.error} >Please enter a valid email address</p>}
            </div>

            <button
              className={styles.subscriptionButton}
              onClick={handleButtonClick}
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className={styles.middlePart}>
          {footerBlocks.map((block) => (
            <FooterSection
              key={block.id}
              section={block}
            />
          ))}
          <div className={footerSectionStyles.block}>
            <a
              className={footerSectionStyles.openingLink}
              href="#showList"
              onClick={showList}
            >
              <h5 className={footerSectionStyles.blockTitle}>Address</h5>
              {areListsVisible ? (
                <img alt="arrowTop" className={footerSectionStyles.arrow} src={arrows.arrowTop} />
        ): (
          <img alt="arrowBottom" className={footerSectionStyles.arrow} src={arrows.arrowBottom} />
        )}


            </a>
            <ul className={`${footerSectionStyles.list} ${areListsVisible && footerSectionStyles.listsVisible}`}>
              <li className={footerSectionStyles.listItem}>1234 Street Adress City Address, 1234</li>
              <li className={footerSectionStyles.listItem}>Phones:
                <a className={footerSectionStyles.contactLink} href="tel:(00) 1234 5678">
                  <span className={footerSectionStyles.additionalInfo}> (00) 1234 5678</span>
                </a>
              </li>
              <li className={footerSectionStyles.listItem}>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
              <li className={footerSectionStyles.listItem}>Friday: 9:00 AM - 6:00 PM</li>
              <li className={footerSectionStyles.listItem}>Saturday: 11:00 AM - 5:00 PM</li>
              <li className={footerSectionStyles.listItem}>E-mail:
                <a className={footerSectionStyles.contactLink} href="mailto:shop@email.com">
                  <span className={footerSectionStyles.additionalInfo}> shop@email.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
        <div className={styles.lowerPart}>
          <div className={styles.socialNetworks}>
            <a className={styles.socialNetworkLink} href="#facebook">
              <Image
                alt='facebook'
                height={15}
                src='https://res.cloudinary.com/docve4syp/image/upload/v1671186141/techstore/facebookIcon_pbzwxd.svg'
                width={15}
            />
            </a>
            <a className={styles.socialNetworkLink} href="#facebook">
              <Image
                alt='facebook'
                height={15}
                src='https://res.cloudinary.com/docve4syp/image/upload/v1671186141/techstore/instagramIcon_vujhke.svg'
                width={15}
            />
            </a>
          </div>

          <div className={styles.paymentSystems}>
            {paymentSystemsImages.map((img) => (
              <a className={styles.paymentSystemsLink} href={`#${img.alt}`} key={`paymentSystem-${img.id}`}>
                <img alt={img.alt} className={styles.paymentSystemsIcon} src={img.imageLink} />
              </a>
              ))}

          </div>

          <p className={styles.copyright} >Copyright © 2020 Shop Pty. Ltd.</p>
        </div>
      </div>
    </section>
  );
}
