import React from 'react'
import { useRef, useState, useEffect } from 'react'
function Login() {

    const UserRef = useRef();
    const errRef = useRef();

    const [ user, setUser ] = useState(' ');
    const [ pwd, setPwd ] = useState(' ');
    const [ errMsg, setErrMsg ] = useState('');
    // const [ success, setSuccess ] = useState(false);

    useEffect(() => {   
        UserRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('erorr');
    })

    const HandleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        // setSuccess(true);
    }

    return (
        <div>
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}> {errMsg}</p>
                <h1>Sign in</h1>
                <form action="post" onSubmit={HandleSubmit}>
                    <label htmlFor="username">username:</label>
                    <input type="text" id="username" ref={UserRef} autoComplete='off' onChange={(e) => setUser(e.target.value)}
                        value={user} required />
                    <label htmlFor="password">password:</label>
                    <input type="password" id="password" onChange={(e) => setPwd(e.target.value)}
                        value={pwd} required />
                    <button>sign in</button>
                </form>
                <p>
                    Need an account ?<br />
                    <span className='line'>
                        <a href="#">sgn up</a>
                    </span>

                </p>
            </section>
        </div>
    )
}

export default Login