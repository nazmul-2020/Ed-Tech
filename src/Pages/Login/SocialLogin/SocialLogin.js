import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;

    if(loading || githubLoading){
        return <Loading></Loading>
    }

    if (error ||githubUser) {
        errorElement =  <p className='text-danger'>Error: {error?.message} {githubError?.message}</p>
        

    }

    if (user || githubUser) {
        return (
            navigate('/home')
        );
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-100 bg-primary'></div>
                <p className='pt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-100 bg-primary'></div>
            </div>
            {errorElement}
            <div>
                <div className=''>
                    <button onClick={() => signInWithGoogle()} className='btn btn-whit w-75 text-white mx-auto d-block my-3 bg-primary'>
                        <span className='px-2'>Google Sign In</span>
                    </button>
                    <button onClick={() => signInWithGithub()} className='btn btn-whit w-75 mx-auto text-white d-block my-3 bg-primary'>
                        <span className='px-2'>GitHub Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;