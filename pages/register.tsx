import Link from 'next/link';
import React, { ReactElement } from 'react';
import { MainContainer } from 'components/MainContainer';
import { useForm } from 'react-hook-form'
import styles from 'styles/register.module.scss';
import classes from 'styles/container.module.scss';
import { loginInputs } from 'types/loginInputs';
import { loginSchema } from 'helpers/loginShema';
import { yupResolver } from '@hookform/resolvers/yup';

const Register: React.FC = ():ReactElement => {
  const {
    register, reset, handleSubmit, formState: {errors}
  } = useForm<loginInputs>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = (): void => reset();

  return (
    <MainContainer>
      <div className={classes.container}>
        <section className={styles.section} >
          <div className={styles.navigation} >
            <Link className={styles.navigationLink} href="/">Home</Link>
            <Link className={styles.navigationLink} href="/register">Login</Link>
          </div>
          <h1 className={styles.title}>Customer Login</h1>
          <div className={styles.mainBlock}>
            <div className={styles.signInBlock}>
              <h4 className={styles.subtitle}>Registered Customers</h4>
              <p className={styles.additionalInfo}>If you have an account, sign in with your email address.</p>
              <div className={styles.formBlock}>
                <form
                  action="#"
                  className={styles.form}
                  method='post'
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className={styles.inputBlock} >
                    <label className={styles.label} htmlFor='email'>
                      <h5 className={styles.inputTitle}>Your Email</h5>
                      <input
                        className={styles.formInput}
                        id='email'
                        {...register('login')}
                        name='login'
                        placeholder='Your Name'
                        type="email"
                      />
                      {errors.login ? (
                        <p className={styles.error}>{errors.login?.message}</p>
                      ) : ''}
                    </label>
                  </div>
                  <div className={styles.inputBlock} >
                    <label className={styles.label} htmlFor='password'>
                      <h5 className={styles.inputTitle}>Your Password</h5>
                      <input
                        className={styles.formInput}
                        id='password'
                        {...register('password')}
                        name='password'
                        placeholder='Your Password'
                        type="password"
                      />
                      {errors.password ? (
                        <p className={styles.error}>{errors.password?.message}</p>
                      ) : ''}
                    </label>
                  </div>
                  <div className={styles.signInPart }>
                    <button className={styles.buttonSignIn} type="submit">Sign in</button>
                    <Link className={styles.forgetPassword} href="#">Forgot Your Password?</Link>
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.registerBlock}>
              <h4 className={styles.subtitle}>New Customer?</h4>
              <h6 className={styles.benefitsTitle}>Creating an account has many benefits:</h6>
              <ul className={styles.benefitsList}>
                <li className={styles.benefitsListItem}>Check out faster</li>
                <li className={styles.benefitsListItem}>Keep more than one address </li>
                <li className={styles.benefitsListItem}>Track orders and more</li>
              </ul>
              <Link className={styles.linkCreateAccount} href="#">Create an account</Link>
            </div>
          </div>
        </section>
      </div>
    </MainContainer>
  )
}

export default Register;
