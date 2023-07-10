import Input from '../../Input/Input';
import { MdVisibility } from 'react-icons/md';
import { MdVisibilityOff } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { isEmpty, isEmail, isLength, isMatch } from '../../helper/validate';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.css';
import {
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    domaine: '',
    file: '',
    ville: '',
    adresse: '',
    password: '',
    cf_password: '',
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const [file, setFile] = useState(false);
  const {
    name,
    lastName,
    phone,
    email,
    domaine,
    file,
    ville,
    adresse,
    password,
    cf_password,
  } = data;

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  const register = async e => {
    e.preventDefault();
    // check fields
    console.log(data);
    if (
      isEmpty(name) ||
      isEmpty(password) ||
      isEmpty(lastName) ||
      isEmpty(phone) ||
      isEmpty(domaine) ||
      isEmpty(ville) ||
      isEmpty(adresse) ||
      isEmpty(file)
    )
      return toast('Remplir tous les champs svp!.', {
        className: 'toast-failed',
        bodyClassName: 'toast-failed',
      });
    // check email
    if (!isEmail(email))
      return toast("Votre adresse email n'est pas valide", {
        className: 'toast-failed',
        bodyClassName: 'toast-failed',
      });
    // check password
    if (isLength(password))
      return toast('Votre mot de passe doit etre composé de 6 caractères au minimum.', {
        className: 'toast-failed',
        bodyClassName: 'toast-failed',
      });
    // check match
    if (!isMatch(password, cf_password))
      return toast("Mot de passe n'est pas confirmé.", {
        className: 'toast-failed',
        bodyClassName: 'toast-failed',
      });
    try {
      const res = await axios.post('/api/auth/registerp', {
        name,
        lastName,
        phone,
        email,
        domaine,
        file,
        ville,
        adresse,
        password,
      });
      toast(res.data.msg, {
        className: 'toast-success',
        bodyClassName: 'toast-success',
      });
    } catch (err) {
      toast(err.response.data.msg, {
        className: 'toast-failed',
        bodyClassName: 'toast-failed',
      });
    }
    handleReset();
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = '')
    );
    setData({
      ...data,
      name: '',
      lastName: '',
      phone: '',
      email: '',
      domaine: '',
      file: '',
      ville: '',
      adresse: '',
      password: '',
      cf_password: '',
    });
  };

  const uploadFile = async e => {
    e.preventDefault();
    try {
      //get file
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append('avatar', file);
      //upload to cloudinary
      const res = await axios.post('/api/upload', formData, {
        onUploadProgress: y => {
          if (y.total < 1024000)
            return toast('Uploading', {
              className: 'bg-upload',
              bodyClassName: 'bg-upload',
              autoClose: 7000,
            });
        },
      });
      console.log(res.data.url);
      // setData({ ...data,[data.file]: res.data.url });

      setData({
        ...data,
        file: res.data.url,
      });

      //setFile(res.data.url);
    } catch (err) {
      toast(err.response.data.msg, {
        className: 'toast-failed',
        bodyClassName: 'toast-failed',
      });
    }
  };
  console.log(data);
  // get services
  const [services, setServices] = useState();

  const getServices = async () => {
    await axios.get('http://localhost:3001/services').then(res => {
      setServices(res.data);
    });
  };
  useEffect(() => {
    getServices();
    // filter()
  }, []);

  return (
    <>
      <ToastContainer />
      <form onSubmit={register}>
        <div className="input1">
          <Input
            type="text"
            text="Prénom"
            name="name"
            handleChange={handleChange}
          />

          <Input
            type="text"
            text="Nom"
            name="lastName"
            handleChange={handleChange}
          />
        </div>
        <div className="input1">
          <Input
            type="text"
            text="Email"
            name="email"
            handleChange={handleChange}
          />
          <Input
            type="text"
            text="Téléphone"
            name="phone"
            handleChange={handleChange}
          />
        </div>



        {/* <br></br> */}
        <div className="input1">
          <select name="ville" className="select" onChange={handleChange}>
            <option value=""> Selectionner votre ville </option>
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
            text="adresse"
            name="adresse"
            handleChange={handleChange}
          />
        </div>
        <div className="input1">

          <Input
            name="password"
            type={visible ? 'text' : 'password'}
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            text="Mot de passe"
            handleClick={handleClick}
            handleChange={handleChange}
          />
          <Input
            name="cf_password"
            type={visible ? 'text' : 'password'}
            icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
            text="Confirmer votre mot de passe"
            handleClick={handleClick}
            handleChange={handleChange}
          />
        </div>
        <div className="input1">

          <Input
            name="dip"
            type="text"
            text="Télécharger votre diplome "
            disabled
          />
          <Input
            type="file"
            text="Télécharger votre diplome"
            name="file"
            handleChange={uploadFile}
          />
        </div>
        <div className="input2">
          <select name="domaine" className="select" onChange={handleChange} id="domaine" >
            <option value=""> Selectionner votre domaine </option>
            {services !== undefined &&
              services.map(service => {
                return <option value={service.name}> {service.name} </option>;
              })}
          </select>
        </div>


        <br /> <br /> <br />
        <Button
          w={'full'}
          onClick={onOpen}
          bg="transparent"
          _hover={{ shadow: 'sm' }}
          required

        >
          {' '}
          <Checkbox>J'accepte les termes et conditions</Checkbox>
        </Button>

        <div className="login_btn">
          <button type="submit" className="button">Inscrire</button>
        </div>
      </form>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Les termes et conditions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>les termes et les conditions...</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              J'accepte
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
