"use client"
import Link from "next/link";
import Image from "next/image";

function FirstPost(){
    return(
        <>
            <div style={{height : '160px', width : '160px', border: 'none', borderRadius: '50%', position: 'absolute', top: '20%', left: '45%'}}>
                <Image style={{border : 'none', borderRadius : '50%'}} src="/images/profile.jpeg" height={160} width={160} alt="My Image"></Image>
            </div>

            <h1 style={{color : "#fff", position : 'absolute', top : '45%', left : '41.5%', fontSize : '30px'}}>Aryan Dev Shourie</h1>

            <h1 style={{color : "#fff", position : 'absolute', top : '55%', left : '22%'}}>When to Use Static Generation v.s. <br/>Server-side Rendering</h1>
            <p style={{color : 'lightgray', fontSize : '15px', position : 'absolute', top : '68%', left : '22%'}}>June 19, 2023</p>

            <p style={{color : "#fff", position : 'absolute', top : '73%', left : '22%', fontSize : '19px'}}>We recommend using <b>Static Generation</b> (with and without data) whenever <br/>
            possible because your page can be built once and served by CDN, <br/>
            which makes it much faster than having a server render the page on every request.</p>

            <p style={{color : "#fff", position : 'absolute', top : '87%', left : '22%', fontSize : '19px'}}>You can use Static Generation for many types of pages, including:</p>

            <ul style={{color : "#fff", position : 'absolute', top : '93%', left : '25%', fontSize : '19px'}}>
                <li>Marketing pages</li>
                <li>Blog Posts</li>
                <li>E-commerce product listings</li>
                <li>Help and documentation</li>
            </ul>

            <p style={{color : "#fff", position : 'absolute', top : '110%', left : '22%', fontSize : '19px'}}>You should ask yourself: "Can I pre-render this page <b>ahead</b> of a user's <br/>
            request?" If the answer is yes, then you should choose Static Generation.</p>

            <p style={{color : "#fff", position : 'absolute', top : '120%', left : '22%', fontSize : '19px'}}>On the other hand, Static Generation is <b>not</b> a good idea if you cannot pre-<br/>
            render a page ahead of a user's request. Maybe your page shows frequently <br/>
            updated data, and the page content changes on every request.</p>

            <p style={{color : "#fff", position : 'absolute', top : '133%', left : '22%', fontSize : '19px'}}>In that case, you can use <b>Server-Side Rendering</b>. It will be slower, but the <br/>
            pre-rendered page will always be up-to-date. Or you can skip pre-rendering <br/>
            and use client-side JavaScript to populate data.</p>

            <Link href="/" style={{color : 'blue', position : 'absolute', top : '147%', left : '22%'}}>← Back to home</Link>

            <br/>
            <br/>
        </>
    );
};

export default FirstPost;