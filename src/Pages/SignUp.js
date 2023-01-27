// TO DO: npm formik yup - validate "form" and authentificate "user"

import "../style/signup.css";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {
  //   addDoc,
  //   collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { useNavigate } from "react-router-dom";

const New = ({ input, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  // const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const [per, setPerc] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     // submitForm();
  //     setErrors();
  //   }
  // }, [errors]);

  useEffect(() => {
    // const uploadFile = () => {
    // const name = new Date().getTime() + file.name;
    // console.log(name);
    // const storageRef = ref(storage, file.name);
    // const uploadTask = uploadBytesResumable(storageRef, file);
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log("Upload is " + progress + "% done");
    //     setPerc(progress);
    //     switch (snapshot.state) {
    //       case "paused":
    //         console.log("Upload is paused");
    //         break;
    //       case "running":
    //         console.log("Upload is running");
    //         break;
    //       default:
    //         break;
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       setData((prev) => ({ ...prev, img: downloadURL }));
    //     });
    //   }
    // );
    // };
    // file && uploadFile();
  }, [file]);

  // console.log(data);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc("users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(per);
  return (
    <div className='signup-box'>
      {/* <h1>{title}</h1> */}
      <h1>Sign Up</h1>
      <div className='bottom'>
        <div className='image-box'>
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=''
          />
        </div>
        <div className='signup-form'>
          <form onSubmit={handleAdd}>
            <div className='formInput'>
              <label htmlFor='file'>
                {/* <DriveFolderUploadOutlinedIcon className='icon' /> */}
              </label>
              <input
                type='file'
                id='file'
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

            <div
              className='formInput'
              // key={input.id}
            >
              {/* <label>{input.label}</label> */}
              <input
                // id={input.id}
                // type={input.type}
                placeholder='email'
                onChange={handleInput}
              />
              <input
                // id={input.id}
                // type={input.type}
                placeholder='password'
                onChange={handleInput}
              />
            </div>
            <button
              //   disabled={per !== null && per < 100}
              type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
