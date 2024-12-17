import React from 'react'
import SectionTitleWithLogo from '../../components/Shared/SectionTitleWithLogo'
import Image from 'next/image'

const PrivacyPolivyPage = () => {
  return (
    <section style={{ paddingTop: 60, paddingBottom: 20 }}>
      <div className='flex flex-col items-center justify-center lg:basis-1/2 lg:text-left'>
        <Image
          loading='lazy'
          src={'https://i.imgur.com/nCrWo6d.png'}
          alt='Logo'
          width={400}
          height={400}
        />
        <p className='mt-4 text-center text-xl font-thin uppercase tracking-widest text-neutral-500 md:text-2xl'>
          Privacy Policy
        </p>
        <p>
          <strong>Effective Date:</strong>
          12.12.2023
        </p>
      </div>

      <div className='m-auto w-11/12 lg:w-8/12'>
        <div className='py-5'>
          <h2 className='mb-2 text-xl font-bold'>Introduction</h2>
          <p>
            Welcome to <strong>Click-Tint</strong>. This Privacy Policy outlines
            how we collect, use, store, and protect your personal information
            when you interact with our services. By using our website (
            <a href='https://click-tint.com/en' className='text-blue-600'>
              https://click-tint.com
            </a>
            ), you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>

        <div className='py-5'>
          <h2 className='mb-2 text-xl font-bold'>Company Information</h2>
          <ul>
            <li>
              <strong>Official Company Names:</strong> Kliktint Dooel, Click
              Tint Doo, ClickTint E.E.
            </li>
            <li>
              <strong>Registered Address:</strong> Marshal Tito 198, Gevgelija
            </li>
            <li>
              <strong>Contact Information:</strong>
            </li>
            <ul>
              <li>
                Email: <a href='mailto:Vh@Click-tint.com'>Vh@Click-tint.com</a>
              </li>
              <li>Phone: +389 72 277 766</li>
            </ul>
          </ul>
        </div>

        <div className='py-5'>
          <h2 className='mb-2 text-xl font-bold'>Data Collection</h2>
          <p>
            We collect personal data solely through forms submitted by you on
            our website.
          </p>
        </div>

        <div className='py-5'>
          <h3 className='mb-2 text-xl font-bold'>Types of Personal Data Collected</h3>
          <ul>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
          </ul>
        </div>

        <div className='py-5'>
          <h3 className='mb-2 text-xl font-bold'>Purpose of Data Collection</h3>
          <p>
            We collect personal data <strong>only</strong> for the purpose of
            order processing.
          </p>
        </div>

        <div className='py-5'>
          <h2 className='mb-2 text-xl font-bold'>Data Sharing</h2>
          <p>
            We <strong>do not share</strong> your personal data with third
            parties. All data is managed internally, and any submitted data is
            permanently deleted within <strong>20 days</strong> to ensure your
            privacy.
          </p>
        </div>

        <div className='py-5'>
          <h2 className='mb-2 text-xl font-bold'>Cookies and Tracking</h2>
          <p>
            We do not use cookies or similar tracking technologies. However, we
            use <strong>Facebook Pixel</strong> to optimize and measure the
            performance of our advertisements.
          </p>
        </div>

        <div className='py-5'>
          {' '}
          <h2 className='mb-2 text-xl font-bold'>Data Retention</h2>
          <p>
            We retain your personal data for <strong>less than 30 days</strong>.
            After this period:
          </p>
          <ul>
            <li>All submitted forms are permanently deleted.</li>
          </ul>
        </div>
        <div className='py-5'>
          <h2 className='mb-2 text-xl font-bold'>User Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li>
              <strong>Access, Modify, or Delete Personal Data:</strong> You can
              contact us via phone at <strong>+389 72 277 766</strong>, and we
              will delete your personal data upon request.
            </li>
            <li>
              <strong>Opt-Out Options:</strong> Since we do not use cookies,
              there is no need for opt-out options related to cookies or
              marketing.
            </li>
          </ul>
        </div>
        <div className='py-5'>
          <h2 className='mb-2 text-xl font-bold'>Security Measures</h2>
          <p>
            We take your data protection seriously. All collected personal data
            is securely stored using <strong>Formspree</strong>, a trusted form
            processing platform.
          </p>
        </div>
        <div className='py-5'>
          <h2 className='mb-2 text-xl font-bold'>Legal Compliance</h2>
          <p>
            While we do not operate internationally under GDPR or CCPA
            compliance, we ensure your personal data is managed responsibly. All
            data is deleted within <strong>20 days</strong> of submission.
          </p>
          <p>
            There are <strong>no age restrictions</strong> for using our
            services.
          </p>
        </div>

        <div className='py-5'>
          <h2 className='mb-2 text-xl font-bold'>Updates to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on our website, and we encourage you to review it
            periodically.
          </p>
        </div>
        <div className='py-5'>
          <h2 className='mb-2 text-xl font-bold'>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your personal data, please contact us:
          </p>
          <ul>
            <li>
              Email: <a href='mailto:Vh@Click-tint.com'>Vh@Click-tint.com</a>
            </li>
            <li>Phone: +389 72 277 766</li>
          </ul>
        </div>

        <hr />
        <p>
          Thank you for trusting <strong>Click-Tint</strong>.
        </p>
      </div>
    </section>
  )
}

export default PrivacyPolivyPage
