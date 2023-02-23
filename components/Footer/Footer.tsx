import React, { ReactElement, useRef, useState } from 'react';
import { footerBlocks } from 'api/footerBlocks';
import { useOnScreen } from 'hooks/useOnScreen';
import { FooterSection } from 'components/Footer/FooterSection';
import { paymentSystemsImages } from 'api/paymentSystemsImages';
import cn from 'classnames';
import { Container } from 'components/Container';
import faceBookIcon from 'images/icons/facebook.svg';
import instagramIcon from 'images/icons/instagram.svg';
import arrowTop from 'images/icons/arrowTop.svg';
import arrowDown from 'images/icons/arrowDown.svg';
import Image from 'next/image'
import styles from 'styles/layout/Footer/Footer.module.scss';
import footerSectionStyles from 'styles/layout/Footer/FooterSection.module.scss';

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

  const ref: any = useRef<HTMLElement>();
  const onScreen: boolean = useOnScreen<HTMLElement>(ref, '150px');

  return (
    <section className={styles.section} data-testid="footer" ref={ref} >
      {onScreen && (
        <Container>
          <div className={styles.upperPart} >
            <div className={styles.titles}>
              <h1 className={styles.titlesMain} >Sign Up To Our Newsletter.</h1>
              <h2 className={styles.titlesSubtitle} >Be the first to hear about the latest offers.</h2>
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
                <h3 className={footerSectionStyles.blockTitle}>Address</h3>
                {areListsVisible ? (
                  <Image alt="arrowTop" className={footerSectionStyles.arrow} src={arrowTop} />
                  ): (
                    <Image alt="arrowBottom" className={footerSectionStyles.arrow} src={arrowDown} />
                )}

              </a>
              <ul className={cn(footerSectionStyles.list, {[footerSectionStyles.listsVisible]: areListsVisible})}>
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
                  src={faceBookIcon}
                  width={15}
                />
              </a>
              <a className={styles.socialNetworkLink} href="#instagram">
                <Image
                  alt='instagram'
                  height={15}
                  src={instagramIcon}
                  width={15}
                />
              </a>
            </div>

            <div className={styles.paymentSystems}>
              {paymentSystemsImages.map((img) => (
                <a className={styles.paymentSystemsLink} href={`#${img.alt}`} key={`paymentSystem-${img.id}`}>
                  <Image alt={img.alt} className={styles.paymentSystemsIcon} src={img.imageLink} />
                </a>
                  ))}

            </div>

            <p className={styles.copyright} >Copyright © 2020 Shop Pty. Ltd.</p>
          </div>
        </Container>
      )}
    </section>
  );
}
