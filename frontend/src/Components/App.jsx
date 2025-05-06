import React from "react";

export default class App extends React.Component {
    componentDidMount() {
        console.log(process.env.NODE_ENV);
        // console.log(process.env.AMPLIFY_DIFF_DEPLOY);
        // console.log(process.env.AMPLIFY_MONOREPO_APP_ROOT);
        console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);

        // const client = gapi.auth2.init({})

        // const client = google.accounts.oauth2.initTokenClient({
        //     client_id: 'clientId',
        //     scope: 'openid',
        //     callback: (response) => {
        //         // Handle the response here
        //         console.log(response);
        //     },
        //     error_callback: (error) => {
        //         console.log(error);
        //     }
        // });
        // client.requestAccessToken();
    }

    render() {
        return <div>
            <p>test</p>
            <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        </div>
    }
}