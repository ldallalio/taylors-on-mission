import React, { ReactElement } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { Open_Sans, Raleway } from '@next/font/google'

type Props = {}
const raleway = Raleway({
    subsets: ['latin'],
    weight: '600',
    variable: '--font-raleway',
    display: 'optional'
})

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: '600',
    variable: '--font-openSans',
    display: 'optional'
})

let mailIcon: any = <i
    className='fas fa-envelope'
></i>;


const ContactUs = (props: Props) => {
    const [state, handleSubmit] = useForm("mdovkllr");
    if (state.succeeded) {
        return <h3 className={ raleway.className }>Message Sent!</h3>;
    }
    return (
        <div id='contactUs'>
            <form onSubmit={ handleSubmit } className={ openSans.className }>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder='ex. John Smith'
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={ state.errors }
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='ex. johnsmith@gmail.com'
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={ state.errors }
                />
                <div>

                    <label htmlFor='newsletter'>Subscribe to our newsletter?</label>
                    <input
                        id="newsletter"
                        type="checkbox"
                        name="Subscribe"
                    />
                </div>
                <label htmlFor="message"> Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder='ex. What would you like to say?'
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={ state.errors }
                />
                <button type="submit" disabled={ state.submitting }>
                    Submit
                </button>
            </form></div>
    )
}

export default ContactUs