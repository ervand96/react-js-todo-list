import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

export default function WebCam() {
    const webcamRef = useRef<any>(null);
    const [image, setImage] = useState('')
    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc)
            console.log(image, 'imageSrc');

        },
        [webcamRef]
    );
    return (
        <>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <a href={image} download className="">
                <button onClick={capture}>Capture photo</button>
            </a>
        </>
    );
};