import Input from '../../Input/Input';
import { MdVisibility } from 'react-icons/md';
import { MdVisibilityOff } from 'react-icons/md';
import { useState } from 'react';
import { isEmpty, isEmail, isLength, isMatch } from '../../helper/validate';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const initialState = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  ville: '',
  adresse: '',
  password: '',
  cf_password: '',
};

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(initialState);
  const {
    name,
    lastName,
    phone,
    email,
    ville,
    adresse,
    password,
    cf_password,
  } = data;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  const register = async e => {
    e.preventDefault();
    console.log(data);
    // check fields
    if (
      isEmpty(name) ||
      isEmpty(password) ||
      isEmpty(lastName) ||
      isEmpty(ville) ||
      isEmpty(adresse) ||
      isEmpty(phone)
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
      const res = await axios.post('/api/auth/register', {
        name,
        lastName,
        phone,
        email,
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
      ville: '',
      adresse: '',
      password: '',
      cf_password: '',
    });
  };

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
        <div className="input1">
          <select name="ville" className="select" onChange={handleChange}>
            <option value=""> Selectionner votre ville </option>
            <option value="Ariena"> Ariena </option>
            <option value="Beja"> Beja </option>
            <option value="Ben arous"> Ben Arous </option>
            <option value="Benzart"> Bézert </option>
            <option value="Tataouine"> Tataouine </option>
            <option value="Tozeur"> Tozeur </option>
            <option value="Tounes"> Tounes </option>
            <option value="Jendouba"> Jendouba </option>
            <option value="Zaghouan"> Zaghouan </option>
            <option value="Seliena"> Seliena </option>
            <option value="Sousse"> Sousse </option>
            <option value="Sidi bouzid"> Sidi bouzid </option>
            <option value="Sfax"> Sfax </option>
            <option value="Gabes"> Gabes </option>
            <option value="Gbelli"> Gbelli </option>
            <option value="Gasserine"> Gasserine </option>
            <option value="Gafsa"> Gafsa </option>
            <option value="Kairouan"> Kairouan</option>
            <option value="Kef"> Kef </option>
            <option value="Djerba"> Djerba </option>
            <option value="Monastir"> Monastir </option>
            <option value="Mannouba"> Mannouba </option>
            <option value="Mahdia"> Mahdia </option>
            <option value="Nabeul"> Nabeul </option>
          </select>
          <Input
            type="text"
            text="Adresse"
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

        



        <Button
          w={'full'}
          onClick={onOpen}
          bg="transparent"
          _hover={{ shadow: 'sm' }}
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
