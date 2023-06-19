import Link from "next/link";
import Image from "next/image";
import "./page.module.css"

export default function Home() {
  return (
    <main>

      <div style={{height : '160px', width : '160px', border: 'none', borderRadius: '50%', position: 'absolute', top: '20%', left: '45%'}}>
        <Image style={{border : 'none', borderRadius : '50%'}} src="/images/profile.jpeg" height={160} width={160} alt="My Image"></Image>
      </div>

      <h1 style={{color : "#fff", position : 'absolute', top : '45%', left : '39%', fontSize : '40px'}}>Aryan Dev Shourie</h1>

      <p style={{color : "#fff", position : 'absolute', top : '55%', left : '30%', fontSize : '20px'}}>Hello, I'm Aryan. I'm a Software Engineer and a Technical Content Writer.</p>
      <p style={{color : "#fff", position : 'absolute', top : '61%', left : '30%', fontSize : '20px'}}>You can connect with me on <a href="https://www.linkedin.com/in/aryandev-shourie-175025229/" style={{color : "blue"}}>LinkedIn</a>.</p>
      <p style={{color : "#fff", position : 'absolute', top : '67%', left : '30%', fontSize : '20px'}}>Checkout my <a href="https://github.com/Aryan2727-debug" style={{color : "blue"}}>GitHub</a> for amazing projects!</p>
      <p style={{color : "#fff", position : 'absolute', top : '73%', left : '30%', fontSize : '20px'}}>Checkout my <a href="https://dev.to/aryan_shourie" style={{color : "blue"}}>DEV.to</a> profile for informative technical articles!</p>

      <h1 style={{color : "#fff", position : 'absolute', top : '83%', left : '30%'}}>Blog</h1>

      <ul style={{position : 'absolute', top : '91%', left : '30%', fontSize : '21px'}}>
        <li>
            <p style={{color : 'blue'}}><Link href="/first-post">When to use Static Generation v.s. Server-Side Rendering</Link></p>
            <br/>
            <p style={{color : 'lightgray', fontSize : '15px'}}>June 19, 2023</p>
        </li>
        <br/>
        <li>
            <p style={{color : 'blue'}}><Link href="/second-post">Two forms of Pre-Rendering</Link></p>
            <br/>
            <p style={{color : 'lightgray', fontSize : '15px'}}>April 15, 2023</p>
        </li>
      </ul>
    </main>
  );
};
