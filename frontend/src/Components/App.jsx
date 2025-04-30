import React from "react";
// import Main from './Main';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GOOGLE_CLIENT_ID } from '../Util/globalConsts'

export default class App extends React.Component {
    render() {
        console.log(process.env.GOOGLE_CLIENT_ID);
        return <p>test</p>
        // return <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        //     <Main/>
        // </GoogleOAuthProvider>
    }
}