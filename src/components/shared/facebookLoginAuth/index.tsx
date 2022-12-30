import { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';

export default function FacebookLoginAuth(): JSX.Element {

    const [login, setLogin] = useState<boolean>(false);
    const [data, setData] = useState<any>({});
    const [picture, setPicture] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const responseFacebook = (response: any) => {
        console.log(response);
        setData(response);
        setLogin(false);
        setPicture(response.picture.data.url);
        if (!response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    const open = () => {
        setIsVisible(true);
    }

    return (
        <div>
            {!login &&
                <FacebookLogin
                    textButton='Login with Facebook'
                    appId="562118384400275"
                    fields="name,email,picture"
                    scope="public_profile,user_friends"
                    callback={responseFacebook}
                    onClick={open}
                />

            }
            {login &&
                <Image src={picture} roundedCircle />
            }
            {login &&
                <Card.Body>
                    <Card.Title>asx</Card.Title>
                    <Card.Text>
                        saxa
                    </Card.Text>
                </Card.Body>
            }
        </div>
    );
}