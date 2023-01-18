import React from 'react'
import { Open_Sans, Raleway } from '@next/font/google'

type Props = {}
const raleway = Raleway({
    subsets: ['latin'],
    weight: '300',
    variable: '--font-raleway',
    display: 'optional'
})

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: '300',
    variable: '--font-openSans',
    display: 'optional'
})
const Partner = (props: Props) => {
    return (
        <div id='partnerWithUs'>
            <h2 className={ raleway.className }>Partner With Us</h2>
            <div>
                <p
                    id="docs-internal-guid-1321c1fa-7fff-296f-abc5-9221243bedfc"
                    style={ { lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" } }
                    dir="ltr"
                    className={ openSans.className }
                >
                    <span

                    >
                        One thing I have quickly realized is that church planting cannot be
                        accomplished alone. Individuals do not plant churches, churches plant
                        churches. As we continue this journey Emily and I would like to invite you
                        to come alongside us and join our support team. This is an opportunity to
                        join God’s work to reach the lost. Each individual or group can support us
                        in a unique way through the gifts He has given you.
                    </span>
                </p>
                <p>&nbsp;</p>
                <ol className={ openSans.className } style={ { marginTop: 0, marginBottom: 0, paddingInlineStart: 48 } }>
                    <li

                        dir="ltr"
                    >
                        <p
                            className={ openSans.className }
                            style={ { lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" } }
                            dir="ltr"
                        >
                            <span

                            >
                                Prayer - Without prayers we will be unsuccessful. When Jesus talked
                                with His disciples about accomplishing a hard thing He instructed them
                                to pray. Will you support us through prayer?
                            </span>
                        </p>
                    </li>
                    <li
                        style={ {
                            listStyleType: "decimal",
                            backgroundColor: "transparent",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            textDecoration: "none",
                            verticalAlign: "baseline",
                        } }
                        dir="ltr"
                    >
                        <p
                            style={ { lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" } }
                            dir="ltr"
                        >
                            <span
                                style={ {
                                    listStyleType: "decimal",
                                    backgroundColor: "transparent",
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                } }
                            >
                                Encouragement - This will be a difficult transition. We need kind and
                                uplifting words, notes, calls. Remember our girls as they learn to
                                love their new home. Will you support us through encouragement?
                            </span>
                        </p>
                    </li>
                    <li
                        style={ {
                            listStyleType: "decimal",
                            backgroundColor: "transparent",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            textDecoration: "none",
                            verticalAlign: "baseline",
                        } }
                        dir="ltr"
                    >
                        <p
                            style={ { lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" } }
                            dir="ltr"
                        >
                            <span
                                style={ {
                                    listStyleType: "decimal",
                                    backgroundColor: "transparent",
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                } }
                            >
                                Give - I plan to work part-time in the local hospital to establish
                                connection in the community, but there will be many living expenses
                                and church expenses that will need to be met. God will meet those
                                needs and He desires to use His people to accomplish His work. Will
                                you support us by giving?
                            </span>
                        </p>
                    </li>
                    <li
                        style={ {
                            listStyleType: "decimal",
                            backgroundColor: "transparent",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            textDecoration: "none",
                            verticalAlign: "baseline",
                        } }
                        dir="ltr"
                    >
                        <p
                            style={ { lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" } }
                            dir="ltr"
                        >
                            <span
                                style={ {
                                    listStyleType: "decimal",
                                    backgroundColor: "transparent",
                                    fontStyle: "normal",
                                    fontVariant: "normal",
                                    textDecoration: "none",
                                    verticalAlign: "baseline",
                                } }
                            >
                                Go - A pillar of our ministry is outreach into the community. We need
                                people to come on mission to Calgary and participate in VBS, soccer
                                camps, block parties, etc… Will you support us by joining us on
                                mission?
                            </span>
                        </p>
                    </li>
                </ol>
                <p>&nbsp;</p>
                <p
                    className={ openSans.className }
                    style={ { lineHeight: "1.38", marginTop: "0pt", marginBottom: "0pt" } }
                    dir="ltr"
                >
                    <span

                    >
                        Supporting us can look different for every person. God has a part for
                        every person to play. We hope you can partner with us in whatever way God
                        places on your heart. Thank you for your willingness and obedience to
                        become a ministry partner with us on our church planting journey.&nbsp;
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Partner