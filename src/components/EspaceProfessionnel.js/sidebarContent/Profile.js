import Input from '../../authentification/Input/Input';
import { isLength, isMatch } from '../../authentification/helper/validate';
import Avatar from '../../authentification/Avatar/Avatar';
import { MdVisibility } from 'react-icons/md';
import { MdVisibilityOff } from 'react-icons/md';
import { AiFillCamera } from 'react-icons/ai';
import { useContext, useRef, useState } from 'react';
import '../../authentification/Profile/profile.css';
import { AuthContext } from '../../authentification/context/AuthContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  name: '',
  lastName: '',
  phone: '',
  ville: '',
  adresse: '',
  password: '',
  cf_password: '',
};

const Profile = () => {
  const inputFile = useRef(null);
  const [visible, setVisible] = useState(false);
  const { user, token, dispatch } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(false);
  const [data, setData] = useState(initialState);
  const { name, lastName, phone, password, ville, adresse, cf_password } = data;

  const handleInput = () => {
    inputFile.current.click();
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeAvatar = async e => {
    e.preventDefault();
    try {
      // get file
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append('avatar', file);

      // upload to cloudinary
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: token,
        },
        onUploadProgress: x => {
          if (x.total < 1024000)
            return toast('Uploading', {
              className: 'bg-upload',
              bodyClassName: 'bg-upload',
              autoClose: 7000,
            });
        },
      });
      setAvatar(res.data.url);
    } catch (err) {
      toast(err.response.data.msg, {
        className: 'toast-failed',
        bodyClassName: 'toast-failed',
      });
    }
  };

  const updateInfo = async () => {
    try {
      const res = await axios.patch(
        '/api/auth/professionnel_update',
        {
          name: name ? name : user.name,
          lastName: lastName ? lastName : user.lastName,
          phone: phone ? phone : user.phone,
          ville: ville ? ville : user.ville,
          adresse: adresse ? adresse : user.adresse,
          avatar: avatar ? avatar : user.avatar,
        },
        {
          headers: { Authorization: token },
        }
      );

      const updatedProfessionnel = await axios.get('/api/auth/professionnel', {
        headers: { Authorization: token },
      });
      dispatch({ type: 'GET_USER', payload: updatedProfessionnel.data });
      return toast(res.data.msg, {
        className: 'toast-success',
        bodyClassName: 'toast-success',
      });
    } catch (err) {
      toast(err.response.data.msg, {
        className: 'toast-failed',
        bodyClassName: 'toast-failed',
      });
    }
  };
  const updatePassword = async () => {
    // check password length
    if (isLength(password))
      return toast('Votre mot de passe doit etre composé de 6 caractères au minimum.', {
        className: 'toast-failed',
        bodyClassName: 'toast-failed',
      });
    // check password match
    if (!isMatch(password, cf_password))
      return toast("Votre mot de passe n'est pas confirmé.", {
        className: 'toast-failed',
        bodyClassName: 'toast-failed',
      });
    try {
      const res = await axios.post(
        '/api/auth/reset_passp',
        { password },
        {
          headers: { Authorization: token },
        }
      );
      return toast(res.data.msg, {
        className: 'toast-success',
        bodyClassName: 'toast-success',
      });
    } catch (err) {
      return toast(err.response.data.msg, {
        className: 'toast-failed',
        bodyClassName: 'toast-failed',
      });
    }
  };
  const handleReset = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => {
        if (input.name === 'password' || input.name === 'cf_password') input.value = ''
      }
    );
    setData({
      ...data,
      password: '',
      cf_password: '',
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name || lastName || phone || ville || adresse || avatar) {
      updateInfo();
    }
    if (password) {
      updatePassword();
      handleReset();
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="profile">
        {/* avatar */}
        <div className="profile_avatar">
          <div className="profile_avatar-wrapper" onClick={handleInput}>
            <Avatar avatar={avatar} />
            <AiFillCamera />
          </div>
          <input
            type="file"
            name="avatar"
            ref={inputFile}
            className="profile_avatar-input"
            onChange={changeAvatar}
          />
        </div>
        {/* form */}
        <form className="profile_input" >
          <div className="profile_input-form">
            <div className="input1">
              <Input
                type="text"
                text="Prénom"
                defaultValue={user.name}
                name="name"
                handleChange={handleChange}
              />
              <Input
                type="text"
                text="Nom"
                defaultValue={user.lastName}
                name="lastName"
                handleChange={handleChange}
              />
            </div>
            <div className="input1">

              <Input
                type="text"
                text="téléphone"
                defaultValue={user.phone}
                name="phone"
                handleChange={handleChange}
              />
              <Input
                type="text"
                text="Email"
                defaultValue={user.email}
                disabled
                handleChange={handleChange}
              />
            </div>
            <div className="input1">
              <select name="ville" className="select" onChange={handleChange} >
                <option value="">{user.ville} </option>
                <option value="Ariena"> Ariena </option>
                <option value="Beja"> Beja </option>
                <option value="ben arous"> ben arous </option>
                <option value="benzart"> benzart </option>
                <option value="tataouine"> tataouine </option>
                <option value="tozeur"> tozeur </option>
                <option value="tounes"> tounes </option>
                <option value="jendouba"> jendouba </option>
                <option value="zaghouan"> zaghouan </option>
                <option value="seliena"> seliena </option>
                <option value="sousse"> sousse </option>
                <option value="sidi bouzid"> sidi bouzid </option>
                <option value="sfax"> sfax </option>
                <option value="gabes"> gabes </option>
                <option value="gbelli"> gbelli </option>
                <option value="gasserine"> gasserine </option>
                <option value="gafsa"> gafsa </option>
                <option value="kairouan"> kairouan</option>
                <option value="kef"> kef </option>
                <option value="mednine"> mednine </option>
                <option value="monastir"> monastir </option>
                <option value="mannouba"> mannouba </option>
                <option value="mahdia"> mahdia </option>
                <option value="nabeul"> nabeul </option>
              </select>
              <Input
                type="text"
                text="Adresse"
                name="adresse"
                defaultValue={user.adresse}
                handleChange={handleChange}
              />
            </div>
            <div className="input1">
              <Input
                type={visible ? 'text' : 'password'}
                icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
                text="Mot de passe"
                name="password"
                handleClick={handleClick}
                handleChange={handleChange}
              />
              <Input
                type={visible ? 'text' : 'password'}
                icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
                text="Confirmer votre mot de passe"
                name="cf_password"
                handleClick={handleClick}
                handleChange={handleChange}
              />
            </div>
              <div className='input2'>
              <Input
              type="text"
              text="Domaine"
              defaultValue={user.domaine}
              disabled
              handleChange={handleChange}
            />
              </div>
          


            <div className="login_btn">
              <button onClick={handleSubmit} className="button">Modifier</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
