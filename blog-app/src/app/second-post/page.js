"use client"
import Link from "next/link";
import Image from "next/image";

function SecondPost(){
    return(
        <>
            <div style={{height : '160px', width : '160px', border: 'none', borderRadius: '50%', position: 'absolute', top: '20%', left: '45%'}}>
                <Image style={{border : 'none', borderRadius : '50%'}} src="/images/profile.jpeg" height={160} width={160} alt="My Image"></Image>
            </div>

            <h1 style={{color : "#fff", position : 'absolute', top : '45%', left : '41.5%', fontSize : '30px'}}>Aryan Dev Shourie</h1>

            <h1 style={{color : "#fff", position : 'absolute', top : '55%', left : '22%'}}>Two Forms of Pre-rendering</h1>
            <p style={{color : 'lightgray', fontSize : '15px', position : 'absolute', top : '62%', left : '22%'}}>April 15, 2023</p>

            <p style={{color : "#fff", position : 'absolute', top : '67%', left : '22%', fontSize : '19px'}}>Next.js has two forms of pre-rendering: <b>Static Generation</b> and <b>Server-side <br/>
            Rendering</b>. The difference is in when it generates the HTML for a page.</p>

            <ul style={{color : "#fff", position : 'absolute', top : '77%', left : '25%', fontSize : '19px'}}>
                <li><b>Static Generation</b> is the pre-rendering method that generates the <br/>
                HTML at <b>build time</b>. The pre-rendered HTML is then reused on each <br/>
                request.
                </li>
                <li><b>Server-side Rendering</b> is the pre-rendering method that generates the <br/>
                HTML on <b>each request.</b></li>
            </ul>

            <p style={{color : "#fff", position : 'absolute', top : '97%', left : '22%', fontSize : '19px'}}>Importantly, Next.js lets you <b>choose</b> which pre-rendering form to use for <br/>
            each page. You can create a "hybrid" Next.js app by using Static Generation <br/>
            for most pages and using Server-side Rendering for others.</p>

            <Link href="/" style={{color : 'blue', position : 'absolute', top : '110%', left : '22%'}}>← Back to home</Link>

            <br/>
            <br/>
        </>
    );
};

export default SecondPost;